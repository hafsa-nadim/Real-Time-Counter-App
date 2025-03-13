import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA1Eydhs-I9v4jcOXCua_blo7wlIykylFM",
    authDomain: "storage-apps-20c51.firebaseapp.com",
    databaseURL: "https://storage-apps-20c51-default-rtdb.firebaseio.com",
    projectId: "storage-apps-20c51",
    storageBucket: "storage-apps-20c51.firebasestorage.app",
    messagingSenderId: "334290697406",
    appId: "1:334290697406:web:b9eed8c02a72d7390eb2ef",
    measurementId: "G-9FE65NN25L"
  };
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, "counter");

function updateCounter(value) {
    set(counterRef, value);
}

document.getElementById("increment").addEventListener("click", function () {
    let count = Number(document.getElementById("counter").innerText);
    updateCounter(count + 1);
});

document.getElementById("decrement").addEventListener("click", function () {
    let count = Number(document.getElementById("counter").innerText);
    updateCounter(count - 1);
});

onValue(counterRef, function (snapshot) {
    document.getElementById("counter").innerText = snapshot.val();
});
