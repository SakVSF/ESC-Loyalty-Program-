import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./css/TransactionsPage.css";

export const TransactionsPage = () => {
  const navigate = useNavigate();
  

  

  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div>



          <div className = "lpcontainer1">

          <div className="lpgrid-container1">

              <div className="lpcard1">
                        <div>
                          <b>ABC Bank</b>
                        </div>
                    </div>

              
                <div className="lpcard1">
                    <div className="loyalty-programs">
                      Transaction Status
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

     
        <button
          className="back-button1"
          id="back_transaction"
          onClick={onBackButtonClick}
        >
          Back
        </button>
        
        <img  class="bg" alt="" src="bg.jpg"/>
   
      </div>
      

  );
};
