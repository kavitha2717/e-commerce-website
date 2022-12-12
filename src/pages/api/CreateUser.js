import React,{useState} from 'react'
 
import axios from 'axios';
import { token,baseUrl } from '../../constants/aApp-constants';
const CreateUser=()=>{
    const[userdetails,setUserDetails]=useState({
        
        name: "",
        email: "",
        gender: "",
        status: ""
    })
    const CreateNewUser =()=>{
      console.log(token);
      axios.defaults.headers.common["Authorization"]=` Bearer ${token}`;
if (userdetails.name != "" && userdetails.email !=""){
axios.post(`${baseUrl}`,userdetails);
    }
    else{
        alert("please fill all details");
    }
};
console.log(userdetails)
    return(
<>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="name@example.com"
  onChange={(e)=>{
    setUserDetails({...userdetails,[e.target.name] : e.target.value})
  }} />
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email"
  onChange={(e)=>{
    setUserDetails({...userdetails,[e.target.name] : e.target.value})
  }}
  placeholder="name@example.com"/>
</div>
{/* gender */}
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1"
  value="male"
  onChange={(e)=>{
    setUserDetails({...userdetails,[e.target.name] : e.target.value})
  }}
  />
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" 
  value="female"
  onChange={(e)=>{
    setUserDetails({...userdetails,[e.target.name] : e.target.value})
  }}
  />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<div className="mb-3">
<select className="form-select" aria-label="Default select example" name="status"  onChange={
  (e)=>{
    setUserDetails({...userdetails,[e.target.name] : e.target.value})
  }
} >

  <option value="active">Active</option>
  <option value="inactive">inactive</option>
  
</select>
<button onClick={CreateNewUser}>Submit</button>
</div>
</>
    )
}
export default CreateUser;