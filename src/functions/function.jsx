import firebase from './firebase'
// import { promises } from 'fs';

 function signup(data){
//   console.log(data)
return new Promise ((resolve, reject) =>{
firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
.then(user=>{
    resolve(user.user)
})
.catch(error=>{
    reject(error)
})
})
 }



 function login(data){
    return new Promise ((resolve, reject) =>{
    firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    .then(user=>{
        resolve(user.user)
    })
    .catch(error=>{
        reject(error)
    })
    })
     }
 export {signup , login}