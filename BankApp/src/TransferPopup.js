import { useState, useCallback } from "react";
import { SuccessPopup } from "./SuccessPopup";
import { PortalPopup } from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import { LPName } from "./LPName";
import { EnterUsingPoints } from "./EnterUsingPoints";
import { AvailablePoints } from "./AvailablePoints";
import { UsingPoints } from "./UsingPoints";
import { RemainingPoints } from "./RemainingPoints";
import { Miles } from "./Miles";
import "./css/TransferPopup.css";

export const TransferPopup = ({ onClose }) => {
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openSuccessPopup = useCallback(() => {
    setSuccessPopupOpen(true);
  }, []);

  const closeSuccessPopup = useCallback(() => {
    setSuccessPopupOpen(false);
  }, []);

  const onCross1ButtonClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);

  return (
    <>
      <div className="transfer-popup">
        <div className="rectangle-div" />
        <img className="ellipse-icon" alt="" src="ellipse-1.svg" />
        <img className="present-1-icon" alt="" src="present-1@2x.png" />
        <div className="transfer-your-miles">Transfer Your Miles</div>
        <div className="transfer-your-miles-to-your">
          Transfer your miles to your{" "}
        </div>
        <LPName />
        <div className="account-div">account</div>
        <div className="total-rewards-to-transfer">
          Total Rewards to Transfer{" "}
        </div>
        <EnterUsingPoints />
        <AvailablePoints />
        <UsingPoints />
        <RemainingPoints />
        <Miles />
        <button
          className="rectangle-button"
          id="completeTransfer"    /* open success popup only after successful transaction */
          onClick={openSuccessPopup}
        />
        <b className="complete-transfer-b">Complete Transfer</b>
        <b className="all-transfers-are-final">All transfers are final</b>
        <div className="points-div">points</div>
        <div className="div">=</div>
        <div className="div1">=</div>
        <div className="available-div">AVAILABLE</div>
        <div className="remaining-div">REMAINING</div>
        <div className="using-div">USING </div>
        <div className="miles-div1">miles</div>
        <div className="div2">-</div>
        <button
          className="cross-1-button"
          id="close_Transferpopup"
          onClick={onCross1ButtonClick}
        />
      </div>
      {isSuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccessPopup}
        >
          <SuccessPopup onClose={closeSuccessPopup} />
        </PortalPopup>
      )}
    </>
  );
};
