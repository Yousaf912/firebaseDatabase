// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getDatabase, set , ref } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-cfU6hOqYgvJB_5vUNww9a-b91rBAgJk",
  authDomain: "formwithdatabase-2b0ba.firebaseapp.com",
  projectId: "formwithdatabase-2b0ba",
  storageBucket: "formwithdatabase-2b0ba.appspot.com",
  messagingSenderId: "777114126735",
  appId: "1:777114126735:web:c526a365ae051516c623fa",
  measurementId: "G-KVENVE3BTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();



window.updateInput = function (selectId, inputId) {
  var selectElement = document.getElementById(selectId);
  var selectedValue = selectElement.value;
  document.getElementById(inputId).value = selectedValue;

  selectElement.selectedIndex = 0;
}

window.sbmit = function () {
  var obj = {
    course: document.getElementById('selectedCourse').value,
    city: document.getElementById('selectedCity').value,
    name: document.getElementById('name').value,
    fatherName: document.getElementById('fName').value,
    email: document.getElementById('mail').value,
    number: document.getElementById('number').value,
    gender: document.getElementById('selectedGender').value,
    birth: document.getElementById('bD').value,
    adress: document.getElementById('adres').value,
    qualification: document.getElementById('selectedQ').value,

  }

  const reference = ref(db,'formData/');
  set(reference,obj)
  console.log(obj);
}

