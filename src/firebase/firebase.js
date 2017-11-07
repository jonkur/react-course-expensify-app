import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBbvSywry8loWkfXurB5Eq5tSh5BCFjKnw",
  authDomain: "expensify-af3e3.firebaseapp.com",
  databaseURL: "https://expensify-af3e3.firebaseio.com",
  projectId: "expensify-af3e3",
  storageBucket: "expensify-af3e3.appspot.com",
  messagingSenderId: "125367328498"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'jon kur',
  age: 27,
  isSingle: true,
  location: {
    city: 'Helsinki',
    country: 'Finland'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

// database.ref().set('This is my data');

// database.ref('age').set(30);
// database.ref('location/city').set('Espoo');0

database.ref('attributes').set({
  height: 175,
  weight: 75
});