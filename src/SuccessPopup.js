import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Miles1 } from "./Miles1";
import { LPName1 } from "./LPName1";
import "./css/SuccessPopup.css";

export const SuccessPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onCrossSuccessButtonClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);

  return (
    <div className="success-popup">
      <div className="your-div">Your </div>
      <button
        className="cross-success-button"
        id="close_Successpopup"
        onClick={onCrossSuccessButtonClick}
      />
      <img className="ellipse-icon1" alt="" src="ellipse-11.svg" />
      <img className="line-icon" alt="" src="line-1.svg" />
      <img className="line-icon1" alt="" src="line-2.svg" />
      <div className="success-div">Success!</div>
      <Miles1 />
      <div className="miles-are-on-their-way">miles are on their way </div>
      <div className="to-your-div">to your </div>
      <LPName1 />
      <div className="account-div1">account</div>
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
