import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export async function adminLogin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Admin signed in:", userCredential.user);
    alert("Admin login successful.");
  } catch (error) {
    console.error("Error signing in admin:", error);
  }
}
