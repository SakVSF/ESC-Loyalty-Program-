import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BankClientLogin.css";
import logo from "./background-memberpage@2x.png";


export const BankClientLogin = () => {
  const navigate = useNavigate();

  

  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onVerifyTextClick = useCallback(() => {
    navigate("/bank-functions");
  }, [navigate]);

  return (
    <div>

      <div className = "container2">
        <div className="grid-container2">
          
              <div className="card2">
                  <div className="loyalty-program-marketplace">
                   Bank Client Login{" "}
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


          

            <div className="card1">
                  <div className="box1">

                        <b className="username-b">Bank Name</b>
                        </div>

                  <div className="box1">
                          <input

                          className="username_rect"
                          type="text"
                          required
                          id="username_signin"
                          />
                  </div>

            </div>

          <div className="card1">
               <div className="box1">


                    <b className="password-b">Password </b>
                </div>

              <div className="box1">
            
                <input
                  className="password_rect"
                  type="password"
                  required
                  id="password_signin"
                />
                </div>

            </div>

          <div className="card1">
            
              <div className="box1">
                      <button
                        className="sign-in-button"
                        id="sign_in"
                        onClick={onVerifyTextClick}
                    
                      >
                        Sign In{" "}
                      </button>
                      </div>

            


            </div>

         


        
          
            </div>

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
