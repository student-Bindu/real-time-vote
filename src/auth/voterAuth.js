import { auth } from "../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export function setupRecaptcha(containerId) {
  window.recaptchaVerifier = new RecaptchaVerifier(
    containerId,
    {
      size: "invisible",
      callback: response => console.log("Captcha Resolved", response)
    },
    auth
  );
}

export async function sendOTP(phoneNumber) {
  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );
    window.confirmationResult = confirmationResult;
    alert("OTP sent to your phone.");
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
}

export async function verifyOTP(otp) {
  try {
    const result = await window.confirmationResult.confirm(otp);
    console.log("User signed in:", result.user);
    alert("Login successful.");
  } catch (error) {
    console.error("Invalid OTP:", error);
  }
}
