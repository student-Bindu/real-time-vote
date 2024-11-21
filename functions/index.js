// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.countVotes = functions.firestore.document("votes/{voteId}").onCreate(async () => {
  const votesSnapshot = await db.collection("votes").get();
  const voteCounts = {};

  votesSnapshot.forEach(doc => {
    const candidateId = doc.data().candidateId;
    voteCounts[candidateId] = (voteCounts[candidateId] || 0) + 1;
  });

  await db.collection("results").doc("voteCounts").set(voteCounts);
});
