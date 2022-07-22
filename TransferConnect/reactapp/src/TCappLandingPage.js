import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/TCappLandingPage.css";

export const TCappLandingPage = () => {
  const navigate = useNavigate();

  const onPrimaryRectButtonClick = useCallback(() => {
    navigate("/bank-client-login");
  }, [navigate]);

  const onPrimaryRectButton1Click = useCallback(() => {
    navigate("/loyalty-partner-login");
  }, [navigate]);

  return (
    <div className="tcapp-landing-page">
      <button
        className="primary-rect-button"
        onClick={onPrimaryRectButtonClick}
      />
      <img
        className="background-memberpage-icon"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="transferconnect-homepage-div">
        TransferConnect Homepage
      </div>
      <div className="welcome-to-transferconnect">
        Welcome to TransferConnect
      </div>
      <div className="bank-client-login">Bank Client Login</div>
      <button
        className="primary-rect-button1"
        id="cardholder"
        onClick={onPrimaryRectButton1Click}
      />
      <div className="loyalty-partner-login">Loyalty Partner Login</div>
    </div>
  );
};
