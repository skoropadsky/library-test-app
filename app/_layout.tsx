import { Stack } from "expo-router";
import { useEffect } from "react";
import { initializeFirebase } from "../config/firebase-init";

export default function RootLayout() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return <Stack />;
}
