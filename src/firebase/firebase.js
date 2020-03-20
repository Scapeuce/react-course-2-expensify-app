import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}

//child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }) 
//child_changed

// database.ref('expenses').on('child_changed', (snapshot, key) => {
//     console.log(snapshot.key, snapshot.val());
// }) 
//child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }) 

// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//              console.log(expenses)
//         })
//     })
//         database.ref('expenses').on('value', (snapshot) => {
//         const newExpenses = []
//         snapshot.forEach((childSnapshot) => {
//             newExpenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//           }) 
          
//         })
// //         console.log(newExpenses)
//  })

// const expenses = [{
//     description: 'descrption of  expenses 1',
//     note:'Note # 1' ,
//     amount: 10,
//     createAt: 10
// },
//     {
//     description: 'descrption of  expenses 2',
//     note:'Note # 2' ,
//     amount: 700,
//     createAt: 101
//     },
    // {
//     description: 'descrption of  expenses 3',
//     note:'Note # 3' ,
//     amount: 1700,
//     createAt: 151
// }
// ]
// expenses.map(expense => {
//     const currExpense = expense
//     database.ref('expenses').push(currExpense)
// })