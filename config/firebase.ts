import { getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with native configuration
const app = getApp();
export const db = getFirestore(app);