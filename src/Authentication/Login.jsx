import React,{useState,useRef} from 'react';
import Signup from './Signup'
const Login=({setSignUpClicked,setLoginClicked})=>{
    const[mobInput,setMobInput]=useState("4");
    // const[numberInput]=useRef();
    // const[text,setText]=useState(false);
     
    return(
        <>
        <div className='row '>
            <div className='col-md-6'>
                        <h4>Login</h4>
                       
                <p>or <span onClick={()=>{
                    console.log("clicked")
                   setLoginClicked(false);
                   setSignUpClicked(true)
                    
                }}
                
                
                style={{color:'orange',cursor:'pointer'}}>create an account? </span>
                </p>
              
            </div>
            <div className='col-md-6'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="food" width="100px" height="100px"/>
            </div>
        </div>
        <div className='mt-3'>
        <label  class="form-label">Name</label>
  <input type="text" class="form-control" value={mobInput} onChange={(event)=>{setMobInput(event.target.value);console.log(event.target.value)}} placeholder="Phone Number"/>
  <button className=' search-btn  w-100 mt-4 border-0 p-2'>Login</button>

        </div>
        </>
    )
}
export default Login;