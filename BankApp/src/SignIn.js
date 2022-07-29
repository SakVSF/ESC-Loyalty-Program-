import { useCallback } from "react";
import { useNavigate} from "react-router-dom";
import "./css/SignIn.css";
import "./bg.jpg";

export const SignIn = () => {
  const navigate = useNavigate();

  const onSignInButtonClick = useCallback(() => {
    navigate("/homepage");
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
        <div className="grid-container1">


          

            <div className="card1">
                  <div className="box1">

                        <b className="username-b">Username </b>
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
                        onClick={onSignInButtonClick}
                      >
                        Sign In{" "}
                      </button>
                      </div>

            


            </div>

         


        
          
            </div>

      </div>

      <div className="container3">
        <div className="grid-container3">
        <div className="card3">
          <div className="customer-engagement">
            Customer Engagement. Made Simple.
          </div>
          </div>
          </div>


      </div>

    <div>
      <img
        className="homepage-picture-icon"
        alt=""
        src="homepage-picture@2x.png"
      />

    </div>
    </div>
  );
};
