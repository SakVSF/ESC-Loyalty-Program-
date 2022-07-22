import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BankFunctions.css";

export const BankFunctions = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/bank-client-login");
  }, [navigate]);

 
  const onQueryMembershipPointsClick = useCallback(() => {
    navigate("/bank-stats");
  }, [navigate]);



  const onViewmodifyListOfClick = useCallback(() => {
    navigate("/bank-stats");
  }, [navigate]);

  const onQueryTransactionStatusClick = useCallback(() => {
    navigate("/bank-stats");
  }, [navigate]);

  const onViewmodifyMembersListsClick = useCallback(() => {
    navigate("/bank-stats");
  }, [navigate]);

  const onViewmodifyEarnRateClick = useCallback(() => {
    navigate("/bank-stats");
  }, [navigate]);

  return (
    <div className="bank-functions-div">
      <img
        className="background-memberpage-icon3"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="bank-interface-div1">Bank Interface</div>
      <button
        className="back-button2"
        id="back_membership"
        onClick={onBackButtonClick}
      >
        Back
      </button>
      <div className="welcome-bank-div">{`Welcome, <Bank>`}</div>
      <img
        className="gojet-rect-icon"
        alt=""
        src="gojet-rect.svg"
      
      />
      <button
        className="query-membership-points"
        onClick={onQueryMembershipPointsClick}
      >
        Query membership points
      </button>
      <img
        className="gojet-rect-icon1"
        alt=""
        src="gojet-rect.svg"
      
      />
      <img className="gojet-rect-icon2" alt="" src="gojet-rect.svg" />
      <button
        className="viewmodify-list-of-loyalty-pr"
        onClick={onViewmodifyListOfClick}
      >
        View/modify list of Loyalty Programs
      </button>
      <button
        className="query-transaction-status"
        onClick={onQueryTransactionStatusClick}
      >
        Query transaction status
      </button>
      <img className="gojet-rect-icon3" alt="" src="gojet-rect.svg" />
      <button
        className="viewmodify-members-lists"
        onClick={onViewmodifyMembersListsClick}
      >
        View/modify members lists
      </button>
      <img className="gojet-rect-icon4" alt="" src="gojet-rect.svg" />
      <button
        className="viewmodify-earn-rate"
        onClick={onViewmodifyEarnRateClick}
      >
        View/modify earn rate
      </button>
    </div>
  );
};
