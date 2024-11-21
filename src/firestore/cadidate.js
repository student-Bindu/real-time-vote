import { db } from "../firebaseConfig";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

const candidateCollection = collection(db, "candidates");

export async function addCandidate(name, party) {
  try {
    await addDoc(candidateCollection, { name, party });
    alert("Candidate added successfully.");
  } catch (error) {
    console.error("Error adding candidate:", error);
  }
}
export async function editCandidate(id, name, party) {
  try {
    const candidateDoc = doc(db, "candidates", id);
    await updateDoc(candidateDoc, { name, party });
    alert("Candidate updated successfully.");
  } catch (error) {
    console.error("Error updating candidate:", error);
  }
}
export async function deleteCandidate(id) {
  try {
    const candidateDoc = doc(db, "candidates", id);
    await deleteDoc(candidateDoc);
    alert("Candidate deleted successfully.");
  } catch (error) {
    console.error("Error deleting candidate:", error);
  }
}

export async function getCandidates() {
  const snapshot = await getDocs(candidateCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
