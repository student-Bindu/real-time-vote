// src/firestore/vote.js
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const votesCollection = collection(db, "votes");

export async function castVote(voterId, candidateId) {
  try {
    await addDoc(votesCollection, { voterId, candidateId, timestamp: new Date() });
    alert("Vote cast successfully.");
  } catch (error) {
    console.error("Error casting vote:", error);
  }
}

export async function getVotes() {
  const snapshot = await getDocs(votesCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
