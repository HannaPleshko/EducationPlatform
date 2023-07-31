# EducationPlatform

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Roles](#roles)
- [Authentication](#authentication)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to my educational platform for learning programming languages! This platform aims to provide an interactive and engaging environment for students, teachers, and administrators to enhance their programming skills and knowledge.

## Features

- Comprehensive courses for various programming languages.
- Interactive coding exercises and challenges.
- Real-time feedback and progress tracking.
- Support for multiple user roles: Student, Teacher, and Administrator.
- Secure authentication using Bearer tokens stored in cookies.
- Multi-stage authentication with email verification and password validation.
- Password hashing using bcrypt for enhanced security.

## Roles

1. **Student:** Students can enroll in courses, access learning materials, and complete coding exercises. They can track their progress and view their achievements on the platform.

2. **Teacher:** Teachers can create and manage courses, add lessons and coding exercises. They have access to student progress and can provide personalized feedback.

3. **Administrator:** Administrators have overall control of the platform. They can manage user accounts, handle reported issues, and ensure the platform's smooth operation.

## Authentication

My platform employs a multi-step authentication process to ensure security:

1. **Email Verification:** Users are required to verify their email addresses during the registration process.

2. **Password Validation:** A strong password policy is enforced to enhance security.

3. **Bearer Token:** Users receive a Bearer token upon successful authentication, which is stored in cookies for added security.

## Tech Stack

### Server-Side:

- TypeScript
- Node.js
- Express
- PostgreSQL (as the database)
- Swagger UI Express (for API documentation)
- Jest (for testing)
- Winston (for logging)
- ESLint and Prettier (for code formatting and linting)
- Husky (for pre-commit hooks)

### Client-Side:

- TypeScript
- React
- Redux Toolkit Query (for data fetching)
- Material UI (for the user interface)
- ESLint and Prettier (for code formatting and linting)

## Getting Started

To set up and run the educational platform on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/educational-platform.git`

2. Install the dependencies for the server and client:

   ```bash
   cd educational-platform/server
   npm install

   cd ../client
   npm install
3. Set up the PostgreSQL database and configure the connection in the server's .env file.

4. Start the server and client applications:
```bash
# Start the server
cd ./server
npm run start

# Start the client
cd ./client
npm run start
```

## Contributing
I welcome contributions from the community! If you'd like to contribute, please follow my contribution guidelines.

## License
The project is licensed under the MIT License. Feel free to use, modify, and distribute the code as permitted by the license.

Thank you for considering my educational platform. I hope you find it valuable for learning and improving your programming skills! If you encounter any issues or have suggestions, please feel free to raise them in my issue tracker. Happy learning!
