// firebase/firestore/getData.js
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getInquiries } from '../../firebase/firestore/getData';


export const getInquiries = async (db) => {
  const inquiriesCollection = collection(db, 'inquiries');
  const inquiriesSnapshot = await getDocs(inquiriesCollection);
  const inquiriesData = inquiriesSnapshot.docs.map((doc) => doc.data());
  return inquiriesData;
};

// pages/api/inquiries.js

export default async function handler(req, res) {
  // Initialize Firestore
  const db = getFirestore();

  // Fetch inquiries data
  const inquiries = await getInquiries(db);

  // Respond with data
  res.status(200).json(inquiries);
}