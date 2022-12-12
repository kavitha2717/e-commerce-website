import React from "react";
import { useParams } from "react-router-dom";
import { token,baseUrl } from "../../constants/aApp-constants";
import axios from "axios";
import { useState } from "react";
const UpdateUser = () => {
  const { userId } = useParams();
  console.log(userId);
  React.useEffect(() => {
    setTimeout(()=>{
    axios.get(`https://gorest.co.in/public/v2/users/${userId}`).then((res) => {
      console.log(res.data);
      setUserDetails(res.data);
    
    });
  },4000);
})
  //    create user
  const [userdetails, setUserDetails] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const CreateUpdateUser = () => {
    console.log(token);
    axios.defaults.headers.common["Authorization"] = ` Bearer ${token}`;
    if (userdetails.name != "" && userdetails.email != "") {
      delete userdetails.gender;
      axios.put(`${baseUrl}/${userId}`, userdetails);
    } else {
      alert("please fill all details");
    }
  };
//   console.log(userdetails);

  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          name="name"
        //   value={userdetails.name}
          placeholder="name@example.com"
          onChange={(e) => {
            setUserDetails({ ...userdetails, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          name="email"
        //   value={userdetails.email}
          onChange={(e) => {
            setUserDetails({ ...userdetails, [e.target.name]: e.target.value });
          }}
          placeholder="name@example.com"
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          name="status"
          value={userdetails.status}
          onChange={(e) => {
            setUserDetails({ ...userdetails, [e.target.name]: e.target.value });
          }}
        >
          <option value="active">Active</option>
          <option value="inactive">inactive</option>
        </select>
        <button onClick={CreateUpdateUser}>Update</button>
      </div>
    </>
  );
};
export default UpdateUser;
