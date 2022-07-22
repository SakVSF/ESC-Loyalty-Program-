import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BankClientLogin.css";

export const BankClientLogin = () => {
  const navigate = useNavigate();

  

  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onVerifyTextClick = useCallback(() => {
    navigate("/bank-functions");
  }, [navigate]);

  return (
    <div className="bank-client-login1">
      
      <img
        className="background-memberpage-icon6"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="bank-client-login2">Bank Client Login</div>
      <button
        className="back-button5"
        id="back_membership"
        onClick={onBackButtonClick}
      >
        Back
      </button>
      <div className="bank-client-login3">Bank Client Login</div>
      <div className="bank-name-div">Bank Name</div>
      <input
        className="rectangle-input2"
        type="text"
        placeholder="Bank Name"
        required
      />
      <div className="password-div1">Password</div>
      <div className="verify-div1" onClick={onVerifyTextClick}>
        Verify
      </div>
      <input
        className="rectangle-input3"
        type="text"
        placeholder="Password"
        required
      />
    </div>
  );
};
