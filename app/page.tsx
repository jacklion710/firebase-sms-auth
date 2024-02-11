"use client";
import React, { 
  useState, 
  useEffect 
} from 'react';
import { 
  ChakraProvider, 
  Box, 
  Input, 
  Button, 
  Text 
} from '@chakra-ui/react';
import { 
  auth, 
  firebaseApp, 
  signInWithPhoneNumber 
} from '../utils/firebase';
import { 
  PhoneAuthProvider, 
  signInWithCredential, 
  RecaptchaVerifier,
  getAuth
} from 'firebase/auth';

function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState<string | null>(null);

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'request-otp', {
        size: 'invisible',
        callback: (response: any) => {
          // Your callback logic here
        },
        'expired-callback': () => {
          console.log('expired');
        },
        'error-callback': (error: any) => {
          console.log(error);
        }
      });
      window.recaptchaVerifier.render().catch((error: any) => {
        console.error("Error rendering reCAPTCHA: ", error);
      });
    }
  }, []);  

  const requestOTP = () => {
    const phoneNumberWithCode = "+1" + phoneNumber; // Ensure correct phone number format
    const appVerifier = window.recaptchaVerifier;
  
    signInWithPhoneNumber(auth, phoneNumberWithCode, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult; // Storing in window, consider using state
        setVerificationId(confirmationResult.verificationId);
      }).catch((error) => {
        console.error("SMS not sent", error);
      });
  };

  const verifyOTP = () => {
    if (!verificationId) return; // Add error handling for missing verificationId
    const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
    signInWithCredential(auth, credential).then((result) => {
      console.log("User signed in", result.user);
    }).catch((error) => {
      console.error("User sign in failed", error);
    });
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Text mb={2}>Enter your phone number:</Text>
        <Input
          placeholder="+1234567890"
          mb={2}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        
        <Button id="request-otp" onClick={requestOTP}>Send OTP</Button>

        {verificationId && (
          <>
            <Text mt={4}>Enter Verification Code:</Text>
            <Input
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              mb={2}
            />
            <Button onClick={verifyOTP}>Verify OTP</Button>
          </>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default Home;
