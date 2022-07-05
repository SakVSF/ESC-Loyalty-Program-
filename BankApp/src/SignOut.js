import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/SignOut.css";

export const SignOut = () => {
  const navigate = useNavigate();

  const onReturnToSignClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="sign-out-div">
      <img
        className="background-homepage-icon3"
        alt=""
        src="background-homepage@2x.png"
      />
      <div className="loyalty-program-marketplace2">
        Loyalty Program MarketPlace{" "}
      </div>
      <div className="abcbank-header-div3">
        <b>ABC</b>
        <span> Bank </span>
      </div>
      <img
        className="homepage-picture-icon3"
        alt=""
        src="homepage-picture@2x.png"
      />
      <div className="customer-engagement-made-simp3">
        Customer Engagement. Made Simple.
      </div>
      <div className="successfully-signed-out">
        <p className="successfully-signed-out1">Successfully signed out! </p>
      </div>
      <Link
        className="return-to-sign-in"
        to="/sign-in"
        id="gotoSignin"
        onClick={onReturnToSignClick}
      >
        Return to Sign In{" "}
      </Link>
    </div>
  );
};
