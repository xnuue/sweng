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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch data from Firestore and update the member count
async function updateMemberCount() {
    try {
        const querySnapshot = await getDocs(collection(db, "UserAuthList"));
        let memberCount = 0; // Initialize member count variable

        querySnapshot.forEach((doc) => {
            memberCount++; // Increment member count for each document
        });

        // Update the member count in the info box
        document.getElementById("count").textContent = memberCount;
    } catch (error) {
        console.error("Error fetching and updating member count:", error);
    }
}

// Call the function to update the member count when the page loads
window.onload = updateMemberCount;
