# Birthday Countdown App

This application helps users calculate the number of days left until their birthday and sends a local notification as a reminder.

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Capacitor CLI](https://capacitorjs.com/) (for running on mobile devices)
- A compatible mobile device or emulator

## Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd birthday-countdown
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

### On Web Browser

To start the app in a web browser:
```sh
npm run dev
```
Then open the displayed localhost URL in your browser.

### On Android / iOS

1. Build the project:
   ```sh
   npm run build
   ```

2. Add the platform (if not already added):
   ```sh
   npx cap add android
   npx cap add ios
   ```

3. Sync Capacitor files:
   ```sh
   npx cap sync
   ```

4. Open the project in the respective platform:
   ```sh
   npx cap open android
   npx cap open ios
   ```

5. Run the app from Android Studio or Xcode.

## Features
- Calculate the number of days until your birthday.
- Display a local notification as a reminder.
- Capture photos using the camera.
- Share the age calculation result.

## Troubleshooting
- If notifications do not appear, ensure you have granted notification permissions.
- If running on a real device, make sure you have the correct development environment set up for Android or iOS.

## License
This project is for educational purposes. Modify and use as needed.

