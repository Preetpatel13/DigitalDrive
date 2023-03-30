import React,{useState,useEffect} from 'react' 
import {userCredential,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import {authentication} from '..//base';
const Login=()=>{
	console.log('Login') 
	const [email,setEmail]=useState(""); 
	
	console.log('Login')
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const navigate =useNavigate();
	console.log('Login')
const handleRegister=()=>{
	console.log('jingle preet');
	console.log('jingle');
	
	createUserWithEmailAndPassword(authentication, email, passw)
	.then((userCredential)=>{
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
	console.log('jingle..... pree')
	const errorMessage = error.message;
	alert(errorMessage)
  });
  console.log('jingle..... preet');
	
//   createUserWithEmailAndPassword(authentication,email,passw)
//   .then((userCredential)=>{
//     const user= userCredential.user
//   console.log(user.email);

//   })
//  .catch((error)=>{console.log(error + "hi")})

}

console.log('returened');
useEffect(()=>{
	console.log('returened');
const unsubscribe = authentication.onAuthStateChanged((user)=>{
	if(user){
		navigate('/home');
		console.log('returened');
	}


})

	}
)





	return(
	<div>
		<form action="" > 
			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="passw">Password</label>
			<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div> 
	{		console.log('jingle')

}	 <button onClick = "googleSignin()">Google Signin</button>
<button onClick = "googleSignout()">Google Signout</button>

			<button onclick={()=>handleRegister()} type="submit">Login</button>
		</form>
	</div>
)} 
export default Login