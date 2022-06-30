import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/LoyaltyPrograms.css";

export const LoyaltyPrograms = () => {
  const navigate = useNavigate();

  const onTransferMilesIndoLinkClick = useCallback(() => {
    navigate("/membership-validation");
  }, [navigate]);

  const onTransferMilesGojetTextClick = useCallback(() => {
    navigate("/membership-validation");
  }, [navigate]);

  const onTransferMilesEminentLinkClick = useCallback(() => {
    navigate("/membership-validation");
  }, [navigate]);

  const onTransferMilesMilleniumQuantuLinkClick = useCallback(() => {
    navigate("/membership-validation");
  }, [navigate]);

  const onTransferMilesConradLinkClick = useCallback(() => {
    navigate("/membership-validation");
  }, [navigate]);

  const onTransferMilesMilleniumLinkClick = useCallback(() => {
    navigate("/membership-validation");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="loyalty-programs">
      <div className="millenium-rect-div" />
      <div className="conrad-rect-div" />
      <div className="eminent-rect-div" />
      <div className="quantum-rect-div" />
      <div className="indo-rect-div" />
      <div className="gojet-rect-div" />
      <div className="gojet-desc-div">
        Enjoy car rental, hotel, travel experiences, take off with flights, and
        related rewards
      </div>
      <img
        className="logo-indopacific-icon"
        alt=""
        src="logo-indopacific@2x.png"
      />
      <img className="logo-gojet-icon" alt="" src="logo-gojet@2x.png" />
      <img className="background-lp-icon" alt="" src="background-lp@2x.png" />
      <div className="millenium-desc-div">
        Redeem points on complimentary nights, room upgrades, over 100 brands in
        the My Millennium Mall, and more.
      </div>
      <div className="conrad-desc-div">
        Turn your points into free nights, travel with our exclusive partners,
        and so much more.
      </div>
      <div className="quantum-desc-div">
        Use your Quantas points to take a well-deserved holiday, request a
        flight upgrade, or use your points to buy or renew your Qantas Club
        membership.
      </div>
      <div className="eminent-desc-div">
        Providing expert 24/7 personalized support to those who settle for
        nothing less than the best in safety, product, and service in private
        aviation.
      </div>
      <div className="indo-desc-div">
        Enjoy car rental, hotel, travel experiences, take off with flights, and
        related rewards.
      </div>
      <div className="millenium-div">Millennium Rewards </div>
      <div className="conrad-div">Conrad X Club </div>
      <div className="quantum-div">Quantum Airlines QFlyer </div>
      <div className="eminent-div">Eminent Airways Guest</div>
      <div className="indopacific-div">IndoPacific Miles</div>
      <div className="gojet-div">GoJet Points</div>
      <div className="available-loyalty-programs">
        Available Loyalty Programs
      </div>
      <div className="featured-programs-div">Featured Programs</div>
      <div className="loyalty-programs-div">Loyalty Programs</div>
      <div className="abc-bank-div2">
        <b>ABC</b>
        <span> Bank </span>
      </div>
      <img className="qflyer-1-icon" alt="" src="qflyer-1@2x.png" />
      <img className="conrad-1-icon" alt="" src="conrad-1@2x.png" />
      <img
        className="my-millennium-club-1-icon"
        alt=""
        src="mymillenniumclub-1@2x.png"
      />
      <div className="eminent-logohelp-div" />
      <img className="logo-2-icon" alt="" src="logo-2@2x.png" />
      <Link
        className="transfermiles-indo"
        to="/membership-validation"
        id="transfer_indopacific"
        onClick={onTransferMilesIndoLinkClick}
      >
        Transfer Miles
      </Link>
      <div
        className="transfermiles-gojet-div"
        onClick={onTransferMilesGojetTextClick}
      >
        Transfer Miles
      </div>
      <Link
        className="transfermiles-eminent"
        to="/membership-validation"
        id="transfer_eminent"
        onClick={onTransferMilesEminentLinkClick}
      >
        Transfer Miles
      </Link>
      <Link
        className="transfermiles-millenium-quantu"
        to="/membership-validation"
        id="transfer_quantum"
        onClick={onTransferMilesMilleniumQuantuLinkClick}
      >
        Transfer Miles
      </Link>
      <Link
        className="transfermiles-conrad"
        to="/membership-validation"
        id="tranfer_conrad"
        onClick={onTransferMilesConradLinkClick}
      >
        Transfer Miles
      </Link>
      <Link
        className="transfermiles-millenium"
        to="/membership-validation"
        id="transfer_millenium"
        onClick={onTransferMilesMilleniumLinkClick}
      >
        Transfer Miles
      </Link>
      <button className="back-button1" id="back_lp" onClick={onBackButtonClick}>
        Back
      </button>
    </div>
  );
};
