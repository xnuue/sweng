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

// Function to fetch data from Firestore and populate the table
async function populateTable() {
    const querySnapshot = await getDocs(collection(db, "UserAuthList"));
    const tableBody = document.getElementById("userList").getElementsByTagName('tbody')[0];

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const name = data.Name;
        const email = data.Email;

        const newRow = tableBody.insertRow(tableBody.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = name;
        cell2.textContent = email;
    });
}

// Call the function to populate the table when the page loads
window.onload = populateTable;
