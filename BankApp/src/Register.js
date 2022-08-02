import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Register.css";

export const Register = () => {
  const navigate = useNavigate();

  const onRegisterButtonClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="register-div">
      <img
        className="background-homepage-icon2"
        alt=""
        src="background-homepage@2x.png"
      />
      <div className="loyalty-program-marketplace1">
        Loyalty Program MarketPlace{" "}
      </div>
      <div className="abcbank-header-div2">
        <b>ABC</b>
        <span> Bank </span>
      </div>
      <button
        className="register-button"
        id="register"
        onClick={onRegisterButtonClick}
      >
        Register{" "}
      </button>
      <img
        className="homepage-picture-icon2"
        alt=""
        src="homepage-picture@2x.png"
      />
      <div className="customer-engagement-made-simp2">
        Customer Engagement. Made Simple.
      </div>
      <input
        className="password-register-input"
        type="password"
        required
        id="password_register"
      />
      <input
        className="confirmpassword-register-input"
        type="password"
        required
        id="confirmpassword_register"
      />
      <input
        className="username-register-input"
        type="text"
        required
        id="username_register"
      />
      <b className="username-b1">Username </b>
      <b className="password-b1">Password </b>
      <b className="confirm-password-b">Confirm Password </b>
    </div>
  );
};
