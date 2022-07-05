import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Status } from "./Status";
import "./css/TransactionsPage.css";

export const TransactionsPage = () => {
  const navigate = useNavigate();
  

  

  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <>
      <div className="transactions-page-div1">
        <img
          className="background-transaction-icon"
          alt=""
          src="background-transaction@2x.png"
        />
        <div className="transactions-page-div2">Transactions Page</div>
        <div className="abc-bank-div3">
          <b>ABC</b>
          <span> Bank </span>
        </div>
        <div className="miles-div">Miles</div>
        <div className="transaction-status-div">Transaction Status </div>
        <Status />
        <div className="program-div">Program</div>
        <button
          className="back-button2"
          id="back_transaction"
          onClick={onBackButtonClick}
        >
          Back
        </button>
      </div>
      
    </>
  );
};
