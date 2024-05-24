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

async function populateTable() {
    try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const tableBody = document.getElementById("userList").getElementsByTagName('tbody')[0];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const clientemail = data.clientemail;
            const clientname = data.clientname;
            const description = data.description;
            const paymentMethod = data.paymentMethod;
            const service = data.service;
            const status = data.status;
            const timeframe = data.timeframe;

            const newRow = tableBody.insertRow(tableBody.rows.length);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            const cell7 = newRow.insertCell(6);
            cell1.textContent = clientemail;
            cell2.textContent = clientname;
            cell3.textContent = description;
            cell4.textContent = paymentMethod;
            cell5.textContent = service;
            cell6.textContent = status;
            cell7.textContent = timeframe;

            // Check if status is "done" and add a class to the row for styling
            if (status.toLowerCase() === "done") {
                newRow.classList.add("done-status");
            }
        });
    } catch (error) {
        console.error("Error fetching and populating data:", error);
    }
}

// Call the function to populate the table when the page loads
window.onload = populateTable;