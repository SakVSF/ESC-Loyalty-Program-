import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LPStats.css";

export const LPStats = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/lp-functions");
  }, [navigate]);

  return (
    <div className="lp-stats-div">
      <img
        className="background-memberpage-icon4"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="loyalty-partner-interface">Loyalty Partner Interface</div>
      <button
        className="back-button3"
        id="back_membership"
        onClick={onBackButtonClick}
      >
        Back
      </button>
      <div className="gojet-rect-div1" />
    </div>
  );
};
