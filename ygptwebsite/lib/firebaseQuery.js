// firestoreQueries.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../app/firebase';

export async function getInquiries() {
  const inquiriesCollection = collection(db, 'inquirys');
  const inquiriesSnapshot = await getDocs(inquiriesCollection);
  const inquiriesList = inquiriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return inquiriesList;
}
