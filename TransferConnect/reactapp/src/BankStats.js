import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BankStats.css";

export const BankStats = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/bank-functions");
  }, [navigate]);

  return (
    <div className="bank-stats-div">
      <img
        className="background-memberpage-icon2"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="bank-interface-div">Bank Interface</div>
      <button
        className="back-button1"
        id="back_membership"
        onClick={onBackButtonClick}
      >
        Back
      </button>
      <div className="gojet-rect-div" />
    </div>
  );
};
