import * as react from 'react-bootstrap';
import { Box } from 'react-bootstrap-icons';

function ourteam(){

return(
<div classNameName="container" 
style={{display: 'flex', flexDirection: 'column'}}

> 

<h2 style={{ color: "red",
				textAlign: "center",
				marginTop: "-50px" }}>Our Team</h2>
<div className='member' style={{display: 'flex', flexDirection: 'raw',
marginLeft: 'auto', marginRight: 'auto',
textAlign: 'center',
marginBottom: '10px'}}>


<div className='kir' style={{
    height: "400px",
    width: "400px",
    textAlign: "center",
    paddingTop: "50px"
}}>
<img  style={{

height: "300px",
width: "300px",
borderRadius: "50%",


}}


className='imag' src={require('.//logos/kirtan.jpeg')}/> 
<p style={
{
    fontSize: "10px",
    color:"black",
    textAlign: "center",
    fontWeight: "bold"
}
}>Sgp project member  <br/> Id no:21dcs077</p>

<h2 style={{
    fontFamily: "Helvetica",
    fontSize:"20px",
    color: "black",
}}>KIRTAN PATEL</h2>

{/* for preet */}


</div>


<div className='kir' style={{
    height: "400px",
    width: "400px",
    textAlign: "center",
    paddingTop: "50px"
}}>
<img  style={{

height: "300px",
width: "300px",
borderRadius: "50%",


}}


className='imag' src={require('.//logos/preet.jpeg')}/> 
<p style={
{
    fontSize: "10px",
    color:"black",
    textAlign: "center",
    fontWeight: "bold"
}
}>Sgp project member  <br/> Id no:21dcs083</p>

<h2 style={{
    fontFamily: "Helvetica",
    fontSize:"20px",
    color: "black",
}}>PREET PATEL</h2>


</div>
{/* preet emd */}

<div className='kir' style={{
    height: "400px",
    width: "400px",
    textAlign: "center",
    paddingTop: "50px"
}}>
<img  style={{

height: "300px",
width: "300px",
borderRadius: "50%",


}}


className='imag' src={require('.//logos/shreya.jpeg')}/> 
<p style={
{
    fontSize: "10px",
    color:"black",
    textAlign: "center",
    fontWeight: "bold"
}
}>Sgp project member  <br/> Id no:21dcs088</p>

<h2 style={{
    fontFamily: "Helvetica",
    fontSize:"20px",
    color: "black",
}}>SHREYA PATEL</h2>


</div>
{/* preet emd */}


</div>

</div>


    );


}

export default ourteam;