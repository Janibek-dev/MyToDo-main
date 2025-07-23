import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCcQyIgIZuiHAqrC8KO1NgyQBdCrpyZw-o",
  authDomain: "todo-6b22d.firebaseapp.com",
  databaseURL: "https://todo-6b22d-default-rtdb.firebaseio.com",
  projectId: "todo-6b22d",
  storageBucket: "todo-6b22d.firebasestorage.app",
  messagingSenderId: "162634566882",
  appId: "1:162634566882:web:fb5379430e74ac5233a2bb",
  measurementId: "G-E2GCZF7V41"
};

// Инициализируем приложение только если оно еще не было инициализировано
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };