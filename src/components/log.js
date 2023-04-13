import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./log.css";
import { auth } from "../Firebase/base.js";

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
    <div className="log-container">
      <div className="register-container">
        <h3 className="register-title"> Register User </h3>
        <input
          placeholder="Email..."
          className="register-email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          type="password"
          className="register-password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register} className="register-button"> Create User</button>
      </div>

      <div className="login-container">
        <h3 className="login-title"> Login </h3>
        <input
          placeholder="Email..."
          className="login-email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          className="login-password" type="password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login} className="login-button"> Login</button>
      </div>

      <h4 className="user-title"> User Logged In: </h4>
      <div className="user-email">{user?.email}</div>

      <button onClick={logout} className="logout-button"> Sign Out </button>
    </div>
  );
}

export default Log;