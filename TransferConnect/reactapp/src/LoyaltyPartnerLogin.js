import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LoyaltyPartnerLogin.css";

export const LoyaltyPartnerLogin = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);



  const onVerifyTextClick = useCallback(() => {
    navigate("/lp-functions");
  }, [navigate]);

  return (
    <div className="loyalty-partner-login1">
      <img
        className="background-memberpage-icon1"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="loyalty-partner-login2">Loyalty Partner Login</div>
      <button
        className="back-button"
        id="back_membership"
        onClick={onBackButtonClick}
      >
        Back
      </button>
    
      <div className="loyalty-partner-login3">Loyalty Partner Login</div>
      <div className="loyalty-partner-name">Loyalty Partner Name</div>
      <input
        className="rectangle-input"
        type="text"
        placeholder="Loyalty Partner"
      />
      <div className="password-div">Password</div>
      <div className="verify-div" onClick={onVerifyTextClick}>
        Verify
      </div>
      <input className="rectangle-input1" type="text" placeholder="Password" />
    </div>
  );
};
