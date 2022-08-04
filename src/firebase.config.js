import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCjmRO_xJYlJl7QoeItQ38xnXM8hOD66lQ',
  authDomain: 'restaurantapp-50b8b.firebaseapp.com',
  databaseURL: 'https://restaurantapp-50b8b-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-50b8b',
  storageBucket: 'restaurantapp-50b8b.appspot.com',
  messagingSenderId: '624234451539',
  appId: '1:624234451539:web:b3d469e3bd8e029508aca6',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
