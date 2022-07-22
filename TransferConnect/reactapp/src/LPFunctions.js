import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LPFunctions.css";

export const LPFunctions = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/loyalty-partner-login");
  }, [navigate]);

  const onViewActiveProgramsClick = useCallback(() => {
    navigate("/lp-stats");
  }, [navigate]);


  const onAddNewProgramClick = useCallback(() => {
    navigate("/lp-stats");
  }, [navigate]);

  const onRemoveExistingProgramClick = useCallback(() => {
    navigate("/lp-stats");
  }, [navigate]);



  const onViewAccrualFilesClick = useCallback(() => {
    navigate("/lp-stats");
  }, [navigate]);


  const onViewHandbackFilesClick = useCallback(() => {
    navigate("/lp-stats");
  }, [navigate]);

  return (
    <div className="lp-functions-div">
      <img
        className="background-memberpage-icon5"
        alt=""
        src="background-memberpage@2x.png"
      />
      <div className="loyalty-partner-interface1">
        Loyalty Partner Interface
      </div>


      <button
        className="back-button4"
        id="back_membership"
        onClick={onBackButtonClick}
      >
        Back
      </button>


      <div className="welcome-lp-div">{`Welcome, <LP>`}</div>
      <img
        className="gojet-rect-icon5"
        alt=""
        src="gojet-rect5.svg"
      
      />
      <button
        className="view-active-programs"
        onClick={onViewActiveProgramsClick}
      >
        View active programs
      </button>
      <img
        className="gojet-rect-icon6"
        alt=""
        src="gojet-rect5.svg"
   
      />
      <button className="add-new-program" onClick={onAddNewProgramClick}>
        Add new program
      </button>
      <img className="gojet-rect-icon7" alt="" src="gojet-rect5.svg" />
      <button
        className="remove-existing-program"
        onClick={onRemoveExistingProgramClick}
      >
        Remove existing program
      </button>
      <img
        className="gojet-rect-icon8"
        alt=""
        src="gojet-rect8.svg"
        
      />
      <button className="view-accrual-files" onClick={onViewAccrualFilesClick}>
        View accrual files
      </button>
      <img
        className="gojet-rect-icon9"
        alt=""
        src="gojet-rect8.svg"
      
      />
      <button
        className="view-handback-files"
        onClick={onViewHandbackFilesClick}
      >
        View handback files
      </button>
    </div>
  );
};
