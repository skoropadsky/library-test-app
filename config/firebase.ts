import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with native configuration
const app = initializeApp();
export const db = getFirestore(app);