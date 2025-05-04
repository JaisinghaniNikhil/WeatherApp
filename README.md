# 🌤️ React Native Weather App

A simple and elegant weather application built with React Native. Users can search for any city and get real-time weather data using the OpenWeatherMap API. It uses React Navigation for seamless screen transitions and securely handles API keys using `.env`.

---

## Features

-  Search weather by city name
-  Real-time temperature, weather status, humidity
-  Clean and modern UI
-  Secure API key handling with `react-native-dotenv`

---

##  Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm or yarn
- React Native CLI or Expo CLI
- Android Studio / Xcode (or a physical device for testing)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-native-weatherapp.git
cd react-native-weatherapp

### 2. Install Dependencies

npm install
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context



## API Setup

### 1. Get your OpenWeatherMap API key
Sign up at https://openweathermap.org/api and generate an API key

### 2. Create a .env file in the root of your project
OPENWEATHER_API_KEY=your_openweathermap_api_key_here


##Environment Configuration

### 1. Install react-native-dotenv
npm install react-native-dotenv

### 2. Configure Babel
Edit your babel.config.js like this:

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }]
    ]
  };
};

### 3. Add Type Declarations
Create a file named env.d.ts in the root:

declare module '@env' {
  export const OPENWEATHER_API_KEY: string;
}

### 4. Update tsconfig.json
{
  "extends": "@react-native/typescript-config/tsconfig.json",
  "compilerOptions": {
    "types": ["@types/react", "@types/react-native"],
    "baseUrl": ".",
    "paths": {
      "@env": ["env.d.ts"]
    }
  },
  "include": ["env.d.ts", "App.tsx", "Screens/**/*.tsx", "components/**/*.tsx"]
}

##Running the App
npx react-native run-android
# or
npx react-native run-ios

📊 API Used
OpenWeatherMap API

## 📸 Output Screenshots

### 🏠 Home Screen
![Home Screen](assets/screenshots/Home.png)

### 🌤️ Weather Screen
![Weather Screen](assets/screenshots/Weather.png)
