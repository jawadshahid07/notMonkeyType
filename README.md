# notMonkeyType

notMonkeyType is a web application designed for tracking game sessions, including metrics like word per minute (WPM), accuracy, and score. Users can view their own game sessions, access personal score statistics, compete with friends, and manage their profiles.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)

## Installation

To install notMonkeyType, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/shaafsalman/notMonkeyType.git
   ```


### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd not-monkeytype-vite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the backend folder:
   ```bash
   cd not-monkeytype-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Configuration

- Backend:
  - Configure the `.env` file with the following:
    - Database Link
    - Port Number
    - Hashing Code
    - Other Environment Variables

- Frontend:
  - Configure the `baseURL` in `not-monkeytype-vite/config.js` with the appropriate port and IP address to connect to the backend.

## Project Structure

### Frontend

- Frontend is developed using React and Vite.
- Custom CSS and Tailwind CSS are used for styling.
- Multiple Spline Models are used in pages.
- JWT tokens are used for secure navigation.
- Login/Signup includes email verification.

### Backend

- Backend utilizes Axios for HTTP requests.
- Bcrypt is used for password encryption.
- JWT is used for token creation.
- Nodemailer is used for email verification.
- MongoDB is used as the database.
- Backend follows a CRUD structure.

## Features


### Hero Page
![Hero Page](<Shots/Screenshot 2024-05-14 171817.png>)

### Login/Signup
![Login](<Shots/Screenshot 2024-05-14 171824.png>)
![Signup](<Shots/Screenshot 2024-05-14 171831.png>)

### Home Game Menu
![Game Menu](<Shots/Screenshot 2024-05-14 171936.png>)

### Single Player Emulator
![Single Player Emulator](<Shots/Screenshot 2024-05-14 172101.png>)

### Multiplayer Emulator
![Multiplayer Emulator](<Shots/Screenshot 2024-05-14 172131.png>)
![Multiplayer Emulator](<Shots/Screenshot 2024-05-14 172138.png>)

 ![alt text](<Shots/Screenshot 2024-05-14 172031.png>)
