import { useState, useCallback, useEffect} from "react";

import { useNavigate,useLocation} from "react-router-dom";
//import { LPName } from "./LPName_mem";
import "./css/SuccessPopup.css";

import logo from "./background-homepage@2x.png";
import tick from "./tick.png";

import bg from "./bg.jpg";


const Success = () => {


  
  const location = useLocation();



 


  const navigate = useNavigate();
 
  



  const GoToHome = useCallback(() => {
    navigate("/homepage", {state:{username:location.state.username}});
  }, [navigate]);

 



  return (


    <div  >
       <img  className="bg" alt="" src={bg}/>

    <div className="scontainer1">
    
   
      <div className="sgridcontainer1">

     
        <div className="scard1">
            <img className="ellipse-icon" alt="" src={tick}/>

        </div>

        <div className="scard1">
            <div className="sbox1">

                      <div >
                      Success!
                      </div>


            </div>

            <div className="sbox1">

                  <div >
                  Your miles are on their way to your account.
                  </div>


            </div>

        </div>


      

    <div className="scard1">
         <div className="sbox1">

            <div >

              You can view the status of your transaction via polling.

            </div>

          <div className="sbox1">

                  <button
                className="success-button"
                id="close_Successpopup"
                onClick={GoToHome}
              >Go to Home</button>
 
            </div> 
         </div>   
 
  
    </div>
    </div>
</div>
 
  


 
</div>

      


 
 
  );
};

export default Success;


/*
const [data, setData] = useState([]);
  useEffect( () =>{
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios
      .get(
        `https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`  //edit url
      )
      .then((res) => {
        setData(res.data);
        
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  
        {products.map((product) => {
          return (

              );
           

        })}


    ----------------
      
        <div className="product-container" >
            
            <div className="lp-name-div" id="LP_name_membership"> {products.name}</div>;
                        
        </div>

           <div className="account-to-start">account to start</div>

              <p className="memberid-error">{formErrors.memberid}</p>

*/