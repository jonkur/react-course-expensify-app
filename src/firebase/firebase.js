import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
























// FOR REFERENCE
// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   let expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });

//   console.log(expenses);
// });

// const expenses = [{
//   description: 'Note number uno',
//   note: 'Some random stuff here just to fill this',
//   amount: 35034,
//   createdAt: moment(new Date()).subtract(52, 'days').valueOf()
// }, {
//   description: 'Another note',
//   note: 'Let us fill in some random text over here',
//   amount: 7295,
//   createdAt: moment(new Date()).subtract(2, 'years').valueOf()
// }, {
//   description: 'Thou shalt have another note',
//   note: 'Yet another filler text',
//   amount: 305025,
//   createdAt: moment(new Date()).subtract(8, 'months').subtract('7', 'days').valueOf()
// }];
// let expenseRefs = {};

// expenses.forEach((expense) => {
//   const ref = database.ref('expenses').push(expense).key;
//   Object.assign(expenseRefs, {[expense.description]: ref});  
// });
// console.log(expenseRefs);








// FOR REFERENCE
// database.ref('notes/-KyQRyndR4FuY8KlJ-fP').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     asdqaeg: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     aerga23w: {
//       title: 'Another note',
//       body: 'This is another note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is another note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}. \nHe is ${data.age} years old and lives in ${data.location.city}, ${data.location.country}.`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Jonas',
//     age: 30,
//     'location/city': 'Seattle',
//     stressLevel: 10
//   });
// }, 5000);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 8000);

// setTimeout(() => {
//   database.ref('age').set(31);
// }, 11000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })

// database.ref().set({
//   name: 'Jonas',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'TestCompany Oy'
//   },
//   location: {
//     city: 'Helsinki',
//     country: 'Finland'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   'location/country': 'United States'
// });

// database.ref('isSingle').remove()
//   .then(() => console.log('Everything a-okay,'))
//   .catch((e) => console.log('Ummm.. something went wrong.'));