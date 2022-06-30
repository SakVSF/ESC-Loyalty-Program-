import { useState, useCallback } from "react";
import { TransferPopup } from "./TransferPopup";
import { PortalPopup } from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import { LPName } from "./LPName";
import "./css/MembershipValidation.css";

export const MembershipValidation = () => {
  const [isTransferPopupOpen, setTransferPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openTransferPopup = useCallback(() => {
    setTransferPopupOpen(true);
  }, []);

  const closeTransferPopup = useCallback(() => {
    setTransferPopupOpen(false);
  }, []);

  const onBackButtonClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);

  return (
    <>
      <div className="membership-validation-div">
        <div className="link-your-div">Link your </div>
        <img
          className="background-memberpage-icon"
          alt=""
          src="background-memberpage@2x.png"
        />
        <div className="transfer-miles-div">Transfer Miles</div>
        <div className="abc-bank-div1">
          <b>ABC</b>
          <span> Bank </span>
        </div>
        <div className="once-linked-we-will-use-this">
          Once linked, we will use this membership for your future mile
          transfers
        </div>
        <input
          className="primary-rect-input"
          type="text"
          required
          id="cardholder"
        />
        <input
          className="confirm-no-rect-input"
          type="text"
          required
          id="confirm"
        />
        <input
          className="memberhsip-no-rect-input"
          type="text"
          required
          id="number"
        />
        <button
          className="verify-rect-button"
          id="verifyMembership"
          onClick={openTransferPopup}
        />
        <b className="primary-cardholder-b">Primary Cardholder</b>
        <b className="membership-number">Membership Number</b>
        <b className="confirm-membership-number">Confirm Membership Number</b>
        <b className="verify-membership">Verify Membership</b>
        <LPName />
        <div className="account-to-start">account to start</div>
        <button
          className="back-button"
          id="back_membership"
          onClick={onBackButtonClick}
        >
          Back
        </button>
      </div>
      {isTransferPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTransferPopup}
        >
          <TransferPopup onClose={closeTransferPopup} />
        </PortalPopup>
      )}
    </>
  );
};
