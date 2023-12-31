import React from "react";
import  ReactDOM  from "react-dom/client";



const Header = () => {
    return(
     <div className="header">
      <div className="logo-container">
       <img className="logo"src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
    </div>
          <div className="nav-items">
               <ul>
                    <li>home</li>
                    <li>About us </li>
                    <li>contact us</li>
                    <li>cart</li>
               </ul>

          </div>
     </div>
    ) ;
};

const RestaurantCard =(props) => {
     const {resName,cuisine}=props;

     return(
          <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
              <img 
              className="res-logo"
              alt ="res-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ygzienfet0nhu2k11swa"/>
               <h3>{resName}</h3>
               <h4>{cuisine}</h4>
               <h4>4.4 stars</h4>
               <h4>45 mintues</h4>
               
          </div>
     );
};
const Body =() =>{
     return (
          <div className="body">
            <div className="search">search</div>   
            <div className="res-container">
       <RestaurantCard 
       resName="Sandeep foods"
        cuisine="Biryani North Indian,Asian "/>
       <RestaurantCard 
       resName="KFC" 
       cuisine="Burger,Fast food"/>
            </div>  
            </div>
          
     );
};

const AppLayout = () =>{
    return (
     <div className="app">
     <Header/> 
     <Body/> 
     

     </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)