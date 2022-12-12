import React, { useState } from 'react'

 const Signup = ({setSignUpClicked,setLoginClicked}) => {
  const[inputarr,setInputarr]=useState([])
const[inputdata,setInputdata]=useState({
name:"",
email:"",
phoneNo:""
})
function changeEvent(e){
  setInputdata({...inputdata,[e.target.name]:e.target.value})
}
let {name,email,phoneNo}=inputdata
function clickEvent(){
  setInputarr([...inputarr,{name,email,phoneNo}])
  console.log(inputarr)
  // console.log(inputdata)

  setInputdata({name:"",email:"",phoneNo:""
})
}

  return (
    <>
    <div className='container p-3'>
    <div className='row '>
            <div className='col-md-6'>
                        <h4>Sign Up</h4>
                       
                <p>or <span onClick={()=>{
                    console.log("clicked")
                   setSignUpClicked(false)
                   setLoginClicked(true)
                    
                }}
                
                
                style={{color:'orange',cursor:'pointer'}}>create an account? </span>
                </p>
              
            </div>
            <div className='col-md-6'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="food" width="100px" height="100px"/>
            </div>
        </div>
        <div className='mt-3 '>
        
  <input type="text" class="form-control p-3 " name='name' value={inputdata.name}placeholder="Phone Number" onChange={changeEvent}/>
  
  <input type="email" class="form-control p-3" name='email' value={inputdata.email} placeholder="Email" onChange={changeEvent}/>

  
  <input type="text" class="form-control p-3" name='phoneNo' value={inputdata.phoneNo} placeholder="Phone Number" onChange={changeEvent}/>
<p className='refferalCode'>Have a refferal code?</p>
  <button className=' search-btn  w-100 mt-4 border-0 p-2' onClick={clickEvent}>CONTINUE</button>
<h6 className="condition"><span style={{color:"gray"}}>By create an account, i accept the</span> Terms & Condition & Privacy Policy</h6>
        </div>
        </div>
        </>
  )
}
export default Signup;
