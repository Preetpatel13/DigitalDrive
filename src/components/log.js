// import { sessionStorage } from 'window';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import "../App.css";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/base.js";

function Log() {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      sessionStorage.setItem('uName', registerName);
      sessionStorage.setItem('uEmail', registerEmail);

      console.log('User Created' + ':  :' + user);
      try {
        const userData = collection(db, "user_data")
        const docRef = await setDoc(userData, registerEmail, {
          email: registerEmail,
          name: registerName,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (error) {
      console.log('Error adding User: ' + error.message);
    }
  };

  const login = async () => {

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log('Logged in as: ' + loginEmail)
      const docRef = doc(db, "user_data", loginEmail);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        //session created        
        sessionStorage.setItem('uName', docSnap.name);
        sessionStorage.setItem('uEmail', loginEmail);
        
  // const history = useHistory();
  // history.push("/");
  
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    sessionStorage.clear();
    
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setRegisterName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          type="email"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}
      <button href='/' >Back to Home</button>
      {/* <button onClick={}>Home</button> */}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Log;

/*

Here are the session related functions in Firebase Authentication:

firebase.auth().setPersistence(persistence)
This function is used to set the persistence state for the current user. It takes a single parameter persistence, which can be one of the following values:
firebase.auth.Auth.Persistence.NONE
firebase.auth.Auth.Persistence.LOCAL
firebase.auth.Auth.Persistence.SESSION
firebase.auth().onAuthStateChanged(nextOrObserver, error, completed)
This function is used to listen for changes to the user's authentication state. It takes three parameters:
nextOrObserver: A function or observer object that is called when the user's authentication state changes.
error: A function that is called when an error occurs.
completed: A function that is called when the listener is removed.
firebase.auth().currentUser
This property returns the currently signed-in user.

firebase.auth().signOut()
This function signs out the current user.

firebase.auth().signInWithRedirect(provider)
This function starts the OAuth sign-in flow by redirecting the user to the identity provider's sign-in page.

firebase.auth().signInWithPopup(provider)
This function starts the OAuth sign-in flow by opening a pop-up window.

firebase.auth().signInWithEmailAndPassword(email, password)
This function signs in a user with their email address and password.

firebase.auth().createUserWithEmailAndPassword(email, password)
This function creates a new user account with the given email address and password.

firebase.auth().fetchSignInMethodsForEmail(email)
This function retrieves the list of sign-in methods available for the given email address.

firebase.auth().sendPasswordResetEmail(email)
This function sends a password reset email to the given email address.*/