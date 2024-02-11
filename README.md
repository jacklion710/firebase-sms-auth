# SMS Authentication with OTP in TypeScript

This repository is dedicated to demonstrating the implementation of SMS-based authentication using One-Time Passwords (OTP) in a TypeScript project. By leveraging Firebase Authentication services, this example provides a robust starting point for developers looking to integrate secure and efficient user verification mechanisms into their applications.

## About the Project

SMS authentication is a widely used security measure that verifies users by sending a unique code to their mobile device, which they must enter into the application to gain access. This method adds an extra layer of security by ensuring that only the person who has access to the registered phone number can log in.

This project utilizes Firebase's Phone Authentication service to send and verify OTPs, showcasing a practical implementation in a Next.js application styled with Chakra UI for a smooth and responsive user interface.

## Key Features

Firebase Integration: Utilizes Firebase Authentication to manage user verification and authentication securely.
TypeScript Support: Written in TypeScript to enhance code quality and reliability through static typing.
Chakra UI: Uses Chakra UI for styling, demonstrating how to build an attractive and responsive UI in a React application.
reCAPTCHA Verification: Implements Google's reCAPTCHA for additional security during the OTP request process, preventing abuse and ensuring that the request is made by a human.

## Getting Started

To get this project up and running on your local machine, follow these steps:

## Prerequisites

Node.js installed on your system
A Firebase project for accessing Firebase services

## Installation

Clone the repository:
```
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project directory:

```
cd firebase-sms-auth
Install dependencies:

```
npm install
```

Set up Firebase configuration:

Create a .env.local file in the root directory and add your Firebase project configuration keys:

```
NEXT_PUBLIC_API_KEY=your_api_key
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_APP_ID=your_app_id
NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

Run the development server:

```
npm run dev
```

Navigate to http://localhost:3000 to see the application in action.
