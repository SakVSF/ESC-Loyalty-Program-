import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Miles1 } from "./Miles1";
import { LPName1 } from "./LPName1";
import "./css/SuccessPopup.css";
import ellipse1 from "./ellipse-11.png";
import tick from "./tick.png";

export const SuccessPopup = ({ onClose }) => {
  const navigate = useNavigate();

  /*
   <div className="miles-are-on-their-way">miles are on their way </div>
         <div className="account-div1">account</div>
         div className="to-your-div">to your account</div>
         */


  const onCrossSuccessButtonClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);

  return (
    <div className="success-popup">
      <div className="your-div">Your miles are on their way to your account</div>
      <button
        className="cross-success-button"
        id="close_Successpopup"
        onClick={onCrossSuccessButtonClick}
      />
     
      <img className="tick" alt="" src={tick}/>
      <div className="success-div">Success!</div>
      
     
      
    
 
      <div className="we-will-send-you-an-update-on">
        <p className="we-will-send">
          We will send you an update on your transaction status soon.{" "}
        </p>
        <p className="alternatively-you-can">
          Alternatively, you can poll for status on your transaction page.
        </p>
      </div>
    </div>
  );
};
