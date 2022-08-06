import { useState, useCallback } from "react";
import { SuccessPopup } from "./SuccessPopup";
import { PortalPopup } from "./PortalPopup";
import { useNavigate, useLocation } from "react-router-dom";

import "./css/TransferPopup.css";
import logo from "./popuplogo.PNG";



export const TransferPopup = ({ onClose }) => {
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  //const navigate = useNavigate();
  const location = useLocation();
  const [points, setPoints]= useState("");
  const [remaining ,setRemaining ] =useState(50000-Number(points));

  const openSuccessPopup = useCallback(() => {
    setSuccessPopupOpen(true);
  }, []);

  const closeSuccessPopup = useCallback(() => {
    setSuccessPopupOpen(false);
  }, []);


  return (
    <>
      <div className="transfer-popup" >

        <div className="tcontainer1">
        
       
          <div className="tgridcontainer1">

         
            <div className="tcard1">
                <img className="ellipse-icon" alt="" src={logo}/>

            </div>

            <div className="tcard1">
                <div className="tbox1">

                <div >
                    Transfer your miles 
                </div>

                </div>

            </div>

            <div className="tcard1">
                <div className="tbox1">

                      <div className="labelpoints" >
                          Using Points
                      </div>

                </div>
                
                <div className="tbox1">
                      <input

                                  className="inputfield"
                                  type="text"

                                  required
                                  
                                  placeholder="Points to transfer"
                                  value={points}

                                  onChange={(e) => 
                                   {setPoints(e.target.value);
                                    setRemaining(50000-Number(e.target.value));
                                    }
                                }
                                    InputLabelProps={{
                                      shrink: true
                                    }}
                                    variant="filled"
                                  
                                
                                                        

                              />

                </div>

            </div>

            <div className="tcard1">
                <div className="tbox1">
                   <div   className="labelpoints" >
                          Points Remaining
                      </div>

                      
                </div>
                
                <div className="tbox1">
                <input className="inputfield"
                      readOnly
                      value={remaining}/>

                </div>

                <div className="tbox1">
                <button
          className="transferbutton"
          id="completeTransfer"    /* open success popup only after successful transaction */
          onClick={openSuccessPopup}
        > Transfer</button>
</div>

            </div>
              
     





                

        </div>

    </div>


            

    
       
       
        
      
 
     
   
      </div>
      {isSuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccessPopup}
        >
          <SuccessPopup onClose={closeSuccessPopup} />
        </PortalPopup>
      )}
    </>
  );
};
