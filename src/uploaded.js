import axios from 'axios';

import React,{Component} from 'react';

function App1() {
	
const [file,setFile]=React.useState('');

function handlefile(event){
	setFile(event.target.files[0]);
	console.log(file)
}

	return (


<div className='main'>
<form>

	<input type="file" name='file' onChange={handlefile}/>
	<button >Upload</button>
	</form>





</div>

  
		
	   );
  }
  
  export default App1;
  