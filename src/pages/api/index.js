import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {SWcard} from '../../components/SWcard/Card'
// import { token } from '../../constants/aApp-constants';
const ApiCalls=()=>{
    const[users,setUsers]=useState([])
    useEffect(()=>{
        setTimeout(()=>{
            axios.get("https://gorest.co.in/public/v2/users").then((res)=>{
                console.log(res.data)
                // res && res.hasOwnProperty("data") && res.data
               console.log( res && res.hasOwnProperty("data") )
                if(res&&res?.data && res?.data.length){
                 setUsers(res?.data)
                }
            }) 
        },4000);
    
    })
return(
    <>
    <div className='row'>
        
    {users && users.length ? users.map((values)=>{
        {console.log(values.id,values.title,values.body)}
return(
    <>
    <div className='col-4'>
    <SWcard id={values.id} name={` Name :${values.name}`} email={values.email}/>
    
    </div>
    </>
)
    })
  
    :(
    <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>)}
</div>
</>
)
}
export default ApiCalls