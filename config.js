// Import Firebase langsung dari CDN (agar jalan di browser tanpa instalasi ribet)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Konfigurasi dari gambar screenshot Anda
const firebaseConfig = {
  apiKey: "AIzaSyA_E50LX3DwyBrK4mQBwJf1l7j4XWklv-k",
  authDomain: "ksp-app-5bf64.firebaseapp.com",
  projectId: "ksp-app-5bf64",
  storageBucket: "ksp-app-5bf64.firebasestorage.app",
  messagingSenderId: "865506617032",
  appId: "1:865506617032:web:dc556b416dd0a6adda27fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export agar bisa dipakai di file lain
export { auth, db, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where, getDoc };

// Cek Login Global (Redirect jika belum login, kecuali di halaman login)
if (!window.location.href.includes('login.html')) {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = 'login.html';
        }
    });
}
