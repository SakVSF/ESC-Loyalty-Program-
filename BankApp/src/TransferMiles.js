import { useState, useCallback, useEffect} from "react";

import { useNavigate,useLocation} from "react-router-dom";

import "./css/TransferMiles.css";
import axios from 'axios';


import logo from "./background-homepage@2x.png";
import bg from "./bg.jpg";





const TransferMiles = () => {


  
  const location = useLocation();
  const memberid = location.state.memberid;
  const lpid = location.state.lpid;

  const [products, SetProducts] = useState([]);

  const [transac, setTransac] = useState([]);
useEffect(() => { 
  fetchProduct();
  
}, []);


const fetchProduct= async ()=> {
 
  axios
  .get(
    `http://localhost:5001/members`

    )
  .then((res) => {
    // console.log(res);
    SetProducts(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

      

};

const addtoTransactions= async ()=> {
 
        const userData = {
              
          amount: points,
          status: "1111",
          memberid: location.state.memberid,
          programid : location.state.lpid,
          username : location.state.username,

        
        };



      await fetch(`http://localhost:5001/transactions/add`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },

      }

      ).then((res) =>  res.json()).then((data)=>setTransac(data))
        
        
      .catch((err) => console.log(err));
     // window.alert(products);

};




 


  const navigate = useNavigate();
 
  const [points, setPoints]= useState("");
  const [remaining ,setRemaining ] =useState("");



  async function OpenSuccess () {
  
    if(parseInt(remaining)<0){
      window.alert("points to transfer cannot exceed total points available")
    }
    else{
      addtoTransactions();
    navigate("/success", {state:{username:location.state.username}});
    }
  }

 



  return (
    <div>

        <img  className="bg" alt="" src={bg}/>


        <div className = "container2">
          <div className="grid-container2">
              <div className="card2">
                        <div>
                          <b>ABC Bank</b>
                        </div>
                    </div>

              
                <div className="card2">
                    <div className="membership-validation">
                     Transfer Miles{" "}
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


      {products.map((item) => (

        <div className="tcontainer1" key = {item._id}>
           {item.Username===location.state.username?    
          (  
         <div className="tgridcontainer1">

                  <div className="tcard1">
                        <div className="tbox1">

                              <div className="labelpoints" >
                                  Available Points
                              </div>

                        </div>

                  </div>


                <div className="tcard1">
                    
                        <div className="tbox1" >
                      


                       
                          <div>
                              <input
                                            className="inputfield"
                                         
                                            type="text"
                                            readOnly
                
                                            placeholder="Points to transfer"
                                            value={item.PointsAvailable}
                                            


                                  />

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
                                        id="points"
                                        required
                                        
                                        placeholder="Points to transfer"
                                        value={points}

                                        onChange={(e) => 
                                        {setPoints(e.target.value);
                                          setRemaining(item.PointsAvailable-Number(e.target.value));
                                          }
                                      }
                                          inputlabelprops={{
                                            shrink: true
                                          }}
                                          variant="filled"
                                        
                                      
                                                              

                                    />

                      </div>

                </div>



                  <div className="tcard1">
                          <div className="tbox1">
                            <div  className="labelpoints" >
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
                                          onClick={OpenSuccess}
                                        > Transfer</button>
                                      </div>

                       </div>

                </div>
                  
                ):
                          (<div></div>)
                          
                          }
                





                    

            </div>

        
  ))}

                

     </div>
          
          
  );
};

export default TransferMiles;


