import { useCallback } from "react";
import { useNavigate, useLocation} from "react-router-dom";

import { LPName1 } from "./LPName1";
import "./css/SuccessPopup.css";

import tick from "./tick.png";

export const SuccessPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  /*
   <div className="miles-are-on-their-way">miles are on their way </div>
         <div className="account-div1">account</div>
         div className="to-your-div">to your account</div>
         */


  const onCrossSuccessButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (

    <div className="success-popup" >

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
                    onClick={onCrossSuccessButtonClick}
                  >Go to Home</button>
     
                </div> 
             </div>   
     
      
        </div>
        </div>
  </div>
     
      
    
 
     
    </div>
  );
};
