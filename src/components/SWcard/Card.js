import React from 'react'; 
// import { useNavigate } from 'react-router-dom';
export const SWcard=({id,name,email})=>{
//   const navigate=useNavigate();
React.useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then((data)=>console.log(data))
},[])
  return(
    
<div className="card">
  
  <div className="card-body">
    <p>{id}jjjjjjjj</p>
    <h5 className="card-title">{name}</h5>
    <h6>{email}</h6>
    {/* <button onClick={()=>{navigate(`/api/update/${id}`)}}>Update</button> */}
    <button>Delete</button>
  </div>
</div>
)
}