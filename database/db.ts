// firebase.js or firebase.ts
import { firebaseConfigData } from "@/config/config";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
  ...firebaseConfigData,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const auth = getAuth(app);

// // Utility functions for authentication
// export const signUp = async (name: string, email: string, password: string, profilePictureUrl?: string) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Update the user's profile with their name and profile picture
//     await updateProfile(user, {
//       displayName: name,
//       photoURL: profilePictureUrl || "",
//     });

//     return user;
//   } catch (error) {
//     console.error("Error signing up:", error);
//     throw error;
//   }
// };

// export const signIn = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     console.error("Error signing in:", error);
//     throw error;
//   }
// };
