import { initializeApp } from 'firebase/app';

// Initialize Firebase with native configuration
export const initializeFirebase = () => {
  try {
    initializeApp();
  } catch (error) {
    // App might already be initialized
    console.log('Firebase initialization:', error);
  }
};