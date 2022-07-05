import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/SignIn.css";

export const SignIn = () => {
  const navigate = useNavigate();

  const onSignInButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="sign-in">
      <img
        className="background-homepage-icon"
        alt=""
        src="background-homepage@2x.png"
      />
      <div className="loyalty-program-marketplace">
        Loyalty Program MarketPlace{" "}
      </div>
      <div className="abcbank-header-div">
        <b>ABC</b>
        <span> Bank </span>
      </div>
      <button
        className="sign-in-button"
        id="sign_in"
        onClick={onSignInButtonClick}
      >
        Sign In{" "}
      </button>
      <img
        className="homepage-picture-icon"
        alt=""
        src="homepage-picture@2x.png"
      />
      <div className="customer-engagement-made-simp">
        Customer Engagement. Made Simple.
      </div>
      <Link
        className="dont-have-an-account-registe"
        to="/register"
        onClick={onDontHaveAnClick}
      >
        Don’t have an account? Register!
      </Link>
      <input
        className="password_rect"
        type="text"
        required
        id="password_signin"
      />
      <input
        className="username_rect"
        type="text"
        required
        id="username_signin"
      />
      <b className="username-b">Username </b>
      <b className="password-b">Password </b>
    </div>
  );
};
