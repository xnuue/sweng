
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"))

function saveBookingData() {
    const service = document.querySelector('input[name="service"]:checked').value;

    const timeframe = document.querySelector('input[name="timeframe"]:checked').value;

    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    const description = document.getElementById('deets').value;

    const bookingData = {
        clientname: UserInfo.name,
        clientemail: UserCreds.email,
        service: service,
        timeframe: timeframe,
        paymentMethod: paymentMethod,
        description: description,
        status: "pending"
    };

    addDoc(collection(db, "bookings"), bookingData)
        .then((docRef) => {
            console.log("Booking saved! Document ID:", docRef.id);
            alert("Thank you for using our service! Please expect an email within 3 hours.")
            window.location.href = "index.html"
        })
        .catch((error) => {
            console.error("Error saving booking:", error);
        });
}

document.getElementById('booking_form').addEventListener('submit', (event) => {
    event.preventDefault();
    saveBookingData();
});