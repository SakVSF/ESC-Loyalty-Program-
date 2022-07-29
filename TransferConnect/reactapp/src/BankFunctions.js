import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BankFunctions.css";
import logo from "./background-memberpage@2x.png";

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
    <div >

    <div className = "container2">
            <div className="grid-container2">
              
                  <div className="card2">
                      <div className="loyalty-program-marketplace">
                      Bank Interface{" "}
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
                      onClick={onQueryMembershipPointsClick}
                    >
                      Query membership points
                    </button>

              </div>   

          <div className="bcard1">   
      
                  <button
                    className="option"
                    onClick={onViewmodifyListOfClick}
                  >
                    View/modify list of Loyalty Programs
                  </button>
             </div> 

         < div className="bcard1">

                <button
                  className="option"
                  onClick={onQueryTransactionStatusClick}
                >
                  Query transaction status
                </button>
          </div> 

          <div className="bcard1">
                
                
                <button
                  className="option"
                  onClick={onViewmodifyMembersListsClick}
                >
                  View/modify members lists
                </button>

          </div> 
     
          <div className="bcard1">  
     
              <button
                className="option"
                onClick={onViewmodifyEarnRateClick}
              >
                View/modify earn rate
              </button>
          </div> 


         </div>
      </div> 
      
 </div> 
  );
};
