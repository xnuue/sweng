// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbz7EftWFT2NC5bE9LXjHrUuBmgtOW9wI",
    authDomain: "bookingsystem-93805.firebaseapp.com",
    databaseURL: "https://bookingsystem-93805-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookingsystem-93805",
    storageBucket: "bookingsystem-93805.appspot.com",
    messagingSenderId: "84951345551",
    appId: "1:84951345551:web:f808f51f7b37a644ff83fa",
    measurementId: "G-34Z8ED88VY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function updateCounts() {
    try {
        // Update member count
        const memberQuerySnapshot = await getDocs(collection(db, "UserAuthList"));
        let memberCount = 0; 
        memberQuerySnapshot.forEach((doc) => {
            memberCount++; 
        });
        document.getElementById("count").textContent = memberCount;

        // Update booking count, skipping 'done' bookings
        const bookingQuerySnapshot = await getDocs(collection(db, "bookings"));
        let bookingCount = 0; 
        bookingQuerySnapshot.forEach((doc) => {
            const bookingData = doc.data();
            if (bookingData.status !== "done") {
                bookingCount++; 
            }
        });
        document.getElementById("pcount").textContent = bookingCount;
    } catch (error) {
        console.error(error);
    }
}

window.onload = updateCounts;