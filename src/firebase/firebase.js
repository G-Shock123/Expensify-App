import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider().addScope('user_friends');
export{facebookAuthProvider, googleAuthProvider, firebase,database as default}

// database.ref('expenses').on('child_removed',(snapshot)=>{

//     console.log(snapshot.val(), snapshot.key);
    
// })


// database.ref('expenses').on('child_changed', (snapshot) => {

//     console.log(snapshot.val(), snapshot.key);

// })

// database.ref('expenses').on('child_added', (snapshot) => {

//     console.log(snapshot.val(), snapshot.key);

// })

// // database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = []

//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()

//             })
//         })
//         console.log(expenses);
        
//     })


// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses =[]
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()

//         })
   
//     })
//     console.log(expenses);
    
// })



// database.ref('expenses').push({
//     description: 'Rent',
//     note:" for last momth",
//     amount: 400,
//     createdAt: 32
// })




// database.ref('notes').push({
//     title:'Massive fire do',
//     body:'Is a bad thingn'
// })

// database.ref('notes/-LmGEHRRKKeF0GFetxnVW').update({
//     body:'Do not mess it up'
// })




// const onValueChange = database.ref().on('value',(snapshot)=>{
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
    

// }) // cannot be a promise
  

// database.ref().off(onValueChange)
// database.ref('location/city').once('value').then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val);
    

// }).catch((e)=>{
//     console.log('Error fetching data ',e);
    
// })

// database.ref().set({
//     name:'Konrad Hylton',
//     age: 30,
//     stressLevel:6,
//     job: {
//         title: 'software',
//         company: 'google'
//     },
//     location:{
//         city: 'Kingston',
//         Country: ' Jamaica'
//     }
// }).then(()=>{

//     console.log('data is saved');
    
// }).catch((e)=>{
//     console.log('There was an  error '+e);
    
// })

// // database.ref().remove().then(()=>{
// //     console.log('removed data');
    
// // }).catch((e)=>{
// //     console.log('error',e);
    
// // })

// database.ref().update({
//     'job/company':'Amazon',
//     'location/city': 'Seattle',
//     stressLevel:9

