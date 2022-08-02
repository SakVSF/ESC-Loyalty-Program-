import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BankStats.css";
import logo from "./background-memberpage@2x.png";

export const BankStats = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/bank-functions");
  }, [navigate]);

  return (
    <div>
      
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
     
    </div>
  );
};
