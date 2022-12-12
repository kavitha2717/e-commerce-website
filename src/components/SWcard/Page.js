import React from "react";
import "./page.css";


function Page() {
  return (
    <>
      <div className="page ">
        <nav className="w-100 ">
          <div className=" logo px-5 ">
            <img
              src="data:image/jpeg;base64,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"
              width="270px"
              height="100px"
              alt="swiggy logo"
            />
          </div>
          <ul>
            <li>
              <i class="fa-sharp fa-solid fa-circle-info"></i>Help
            </li>

            <li>
              <i class="fa-regular fa-user"></i>SignIn
            </li>

            <li>
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>Cart
            </li>
          </ul>
        </nav>
        <div className="content">
          <h2>Great restaurents in Ahamadabad, delivering to you</h2>
          <p>Set exact location to find the right restaurent near you.</p>
          <div className="inputField">
            <input
              type="text"
              className=" fs-6 w-50 p-2 text-black-50 searchBox"
              placeholder="Enter your delivery location"
            />

            <div>
              <button className="border-0 p-2   find-food">FIND FOOD</button>
            </div>
          </div>
        </div>
        <div>
          <p className="fs-6 px-5 mx-5">Home/Ahamadabad</p>
        </div>
        <div className="Aboutfood">
          <h3>About the food culture in Ahamadabad</h3>
          <p>
            Order food & beverages online from restaurants near & around you. We
            deliver food from your neighborhood local joints, your favorite
            cafes, luxurious & elite restaurants in your area. Exciting bit? We
            place no minimum order restrictions! Order in as little (or as much)
            as you?d like. We?ll Swiggy it to you!
          </p>

          <div className="city">
            <h3>Where might we find you?</h3>
           
            <div className="row1">
                
              <a>Vastraliur</a>
              <a>GOTA</a>
              <a>lialdi&Ambawadi</a>
              
            </div>
            <div className="row2">
                
              <a>Ghatlodia</a>
              <a>Bopal</a>
              <a>PrahladNagar</a>
             
            </div>
            <div className="row3">
               
              <a>Gandhinagar</a>
              <a>LalDarwaja</a>
              <a>Naranpura</a>
              
            </div>
            <div className="row4">
               
              <a>Navrangpura </a>
              <a>Science City</a>
              <a>Maninagar</a>
              
            </div>
            <div className="row5">
                
              <a>Chandkheda</a>
              
            </div>
            </div>
            <div className="cardṣ">
                <h3>Popular restaurents in and around Ahamadabad</h3>
               
                </div>
        </div>
      </div>
    </>
  );
}
export default Page;
