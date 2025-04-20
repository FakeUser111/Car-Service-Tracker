// ✅ Your Firebase configuration (Replace with your actual Firebase credentials)
const firebaseConfig = {
  apiKey: "AIzaSyDgT44RVDn9Y76BLYjY6csC6yGI9bE1EME",
  authDomain: "carservicetracker-1f0ee.firebaseapp.com",
  projectId: "carservicetracker-1f0ee",
  storageBucket: "carservicetracker-1f0ee.firebasestorage.app",
  messagingSenderId: "141925031110",
  appId: "1:141925031110:web:ff032ad134efba111f8bc7",
  measurementId: "G-LE3D3F68DR"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

console.log("🔥 Firebase Initialized Successfully!");

