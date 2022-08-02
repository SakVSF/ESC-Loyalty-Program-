import { useCallback } from "react";
import {  useNavigate } from "react-router-dom";
import "./css/SignOut.css";

export const SignOut = () => {
  const navigate = useNavigate();

  const onReturnToSignClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    
    <div>
      <img  class="bg" alt="" src="bg.jpg"/>


      <div className = "container2">
        <div className="grid-container2">
            <div className="card2">
                      <div>
                        <b>ABC Bank</b>
                      </div>
                  </div>

             
              <div className="card2">
                  <div className="loyalty-program-marketplace">
                    Loyalty Program MarketPlace{" "}
                  </div>
              </div>

             

          </div>
      </div>



      <div>
            <img   className="background-homepage1-icon"
            alt=""
                          src="background-homepage@2x.png"
                        />
      </div>

      
      
      <div className="container1">
        <div className="signgrid-container">

        <div className="cardsignout">
        <div className="successfully-signed-out1">Successfully signed out! </div>
            </div>
            <div>
            <button
              className="return-to-sign-in"
             
              id="gotoSignin"
              onClick={onReturnToSignClick}
            >
              Sign In
            </button>
            </div>
            </div>

            </div>
    </div>
  );
};
