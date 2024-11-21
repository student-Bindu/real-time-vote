// src/firestore/voter.js
import { db } from "../firebaseConfig";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

const voterCollection = collection(db, "voters");

export async function addVoter(name, id) {
  try {
    await addDoc(voterCollection, { name, id });
    alert("Voter added successfully.");
  } catch (error) {
    console.error("Error adding voter:", error);
  }
}

export async function editVoter(id, name, voterId) {
  try {
    const voterDoc = doc(db, "voters", id);
    await updateDoc(voterDoc, { name, voterId });
    alert("Voter updated successfully.");
  } catch (error) {
    console.error("Error updating voter:", error);
  }
}

export async function deleteVoter(id) {
  try {
    const voterDoc = doc(db, "voters", id);
    await deleteDoc(voterDoc);
    alert("Voter deleted successfully.");
  } catch (error) {
    console.error("Error deleting voter:", error);
  }
}

export async function getVoters() {
  const snapshot = await getDocs(voterCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
