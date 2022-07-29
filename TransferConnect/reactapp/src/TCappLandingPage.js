import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/TCappLandingPage.css";
import logo from "./background-memberpage@2x.png";

export const TCappLandingPage = () => {
  const navigate = useNavigate();

  const onBankClientButtonClick = useCallback(() => {
    navigate("/bank-client-login");
  }, [navigate]);

  const onLoyaltyPartnerButtonClick = useCallback(() => {
    navigate("/loyalty-partner-login");
  }, [navigate]);

  return (
    <div>

              
        <div className = "container2">
                <div className="grid-container2">
           
                      <div className="card2">
                          <div className="transferconnect">
                           TransferConnect HomePage
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

      <div className="container1">
        <div className="grid-container1">

              <div className="tcard1">  
                      <div >
                      Welcome to TransferConnect
                    </div>

                </div>


             <div className="tcard1">  


                  <div className="tbox1">
                        <button
                          className="homepagebutton"
                          onClick={onBankClientButtonClick}
                        > Bank Client Login </button>

                    </div>

                       
                  <div className="tbox1">
                  <button
                        className="homepagebutton"
                        id="cardholder"
                        onClick={onLoyaltyPartnerButtonClick}
                    >Loyalty Partner Login</button>
                          
                  </div>

            </div>

    </div>

    </div>

  </div>
  );
};
