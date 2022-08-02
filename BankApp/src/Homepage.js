import { useCallback } from "react";
import { useNavigate} from "react-router-dom";
import "./bg.jpg";

import "./css/Homepage.css";

export const Homepage = () => {
  const navigate = useNavigate();

  const onTransactionsPageTextClick = useCallback(() => {
    navigate("/transactions-page");
  }, [navigate]);

  const onSignOutLinkClick = useCallback(() => {
    navigate("/sign-out");
  }, [navigate]);

  const onViewLoyaltyProgramsClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);



 

  return (

   

    <div>



            <div className = "homecontainer2">

                <div className="homegrid-container2">

                    <div className="homecard2">
                              <div>
                                <b>ABC Bank</b>
                              </div>
                          </div>

                    
                      <div className="homecard2">
                          <div className="hometransfer-miles">
                            Transfer Miles
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

    

                  
                        


                      

      <div className="homecontainer1" >



            <div className="homecarda1">


            <div className="rewards-to-display-div">


                <div className="homebox1">
                      <div classname="homenumber" id="rewards_display">50000</div> 
                  </div>

                <div className="homebox1">
                      <div className="rewards-div">Rewards to Transfer!</div>
                  </div>

            </div>

            </div>

              

            <div className="homecardb1">

                 <div className="homebox1">

                 
                  <img
                    className="transfer-logo"
                    alt=""
                    src="transfer-logo-1@2x.png"
                  />

                  </div>


              

                    <div classname="hometransfer-your-rewards">

                    <div classname="homebox1">
                          Transfer Your Rewards 
                          </div>
                      </div>

              
                
                      <div className="use-your-miles-for-the-things">
                        Use your miles for the things that matter the most.
                        </div>

              
             
                 


                <div className="homebox1">   

                    <button
                      className="view-loyalty-programs"
                      id="view_loyalty"
                      onClick={onViewLoyaltyProgramsClick}
                    >
                      View Loyalty Programs
                    </button>

                </div>

            </div>



            
            <div className="homecardb1">

                  <div className="homebox1">

                              
                            <img
                              className="progress"
                              alt=""
                              src="progress.PNG"
                            />

                            </div>

                            <div classname="hometransfer-your-rewards">

                  <div classname="homebox1">
                                  Transaction Polling
                                  </div>
                              </div>



                              <div className="use-your-miles-for-the-things">
                               Poll to view current status of your transactions
                                </div>



                  <div classname="homebox1">
                   <div><br></br></div>
                    
                  <button
                        className="view-status-div"
                      
                        id="sign_out"
                        onClick={onTransactionsPageTextClick}
                      >
                    View Status

                    </button>
                  
              

                </div>

            </div>




              

 

        </div>
        


 
            
   





      
       <div>
       <button className="back-button1" id="back_lp" onClick={onSignOutLinkClick}>
              Sign Out
          </button>
      </div>


    
        <img  class="hbg" alt="" src="bg.jpg"/>
   

      
     



</div>


  );
};
