// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useContext, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "freegle-server.firebaseapp.com",
  databaseURL:
    "https://freegle-server-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "freegle-server",
  storageBucket: "freegle-server.appspot.com",
  messagingSenderId: "839434641369",
  appId: "1:839434641369:web:fd3e6c56d924135ae543c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

// chat feature init
export const db = getFirestore(app);

export async function storeImage(imageUri, fileName) {
  const storage = getStorage();
  const storageRef = ref(storage, fileName);

  uploadBytes(storageRef, imageUri).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}

export async function retrieveImage(id) {
  let url;
  const storage = getStorage();
  const reference = ref(storage, "/" + id);
  await getDownloadURL(reference).then((x) => {
    url = x;
  });

  return url;
}
