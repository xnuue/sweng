
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
    import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
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
    const db = getFirestore();
    const auth = getAuth(app);

    let name = document.getElementById('fname');
    let pass = document.getElementById('pw');
    let em = document.getElementById('email');
    let MainForm = document.getElementById('reg');

    let RegisterUser = evt => {
      evt.preventDefault();

      createUserWithEmailAndPassword(auth, em.value, pass.value)
        .then(async (credentials) => {
          var ref = doc(db, "UserAuthList", credentials.user.uid);
          await setDoc(ref, {
            name: name.value,
            email: em
          });
          alert("Account created!");
          window.location.href = "login.html";
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.code);
          console.log(error.message);
        })
    }
    MainForm.addEventListener('submit', RegisterUser);