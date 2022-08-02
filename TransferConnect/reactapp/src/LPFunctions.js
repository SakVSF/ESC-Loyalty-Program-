import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LPFunctions.css";
import logo from "./background-memberpage@2x.png";


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
    
    <div >

    <div className = "container2">
            <div className="grid-container2">
              
                  <div className="card2">
                      <div className="loyalty-program-marketplace">
                      Loyalty Partner Interface{" "}
                      </div>
                  </div>

                

              </div>
     </div>


      <div>
            <img   className="background-homepage1-icon"
            alt=""
                          src={logo}
                        />
      </div>

      <button
                  className="back-button1"
                  id="back_membership"
                  onClick={onBackButtonClick}
                >
                  Back
                </button>

      <div className="container1">
        <div className="grid-container1">
            <div className="bcard1">   


            <button
              className="option"
              onClick={onViewActiveProgramsClick}
            >
              View active programs
            </button>


            </div> 

      < div className="bcard1">

            <button className="option" onClick={onAddNewProgramClick}>
              Add new program
            </button>


        </div> 
     
     <div className="bcard1">      


           
           
              <button
                className="option"
                onClick={onRemoveExistingProgramClick}
              >
                Remove existing program
              </button>

              </div> 
     
     <div className="bcard1">      




      <button className="option" onClick={onViewAccrualFilesClick}>
        View accrual files
      </button>


      </div> 
     
     <div className="bcard1">      

    
      <button
        className="option"
        onClick={onViewHandbackFilesClick}
      >
        View handback files
      </button>
    </div>
    </div>
    </div>

    </div>
  );
};
