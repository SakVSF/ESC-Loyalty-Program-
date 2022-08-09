import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import "./css/TransactionsPage.css";

const TransactionsPage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const location = useLocation();

  const [status, setStatus] = useState([]);



  useEffect(() => {
    fetchProducts();
  
  }, []);

  /*
  async function  fetchStatus(refno){
      const userData = {
        
          Refno: refno,
        
        };

    
 
    await fetch(`http://localhost:5001/status`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
       
      }
      
      ).then((res) =>  res.json()).then((data)=>setStatus(data))
        
        
      .catch((err) => console.log(err));
   

   // document.getElementById("FieldStatus").innerHTML= status.msg;

    }

*/


  


  const fetchProducts = () => {
    axios
      .get(
        `http://localhost:5001/getTransaction`
       //'https://shoppingapiacme.herokuapp.com/shopping'
        )
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const onBackButtonClick = useCallback(() => {
    navigate("/homepage", {state:{username:location.state.username}});
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


          <div className='container-tp'>
            <div className='gridcontainer-tp'>
        {products.map((product) => (
        
          <div  key = {product._id}>
          
              {product.Username===location.state.username?(
               

              <div className="cardtp">
         
                  <p className="Field">Loyalty Program Name : {product.LoyaltyProgramID}</p>
                  
                  
                  <p className="Field">Reference Number  : {product.RefNo}</p>
            
                  {
                  product.Status==="0000"? (
                    <p id="Field">Status : Success </p>

                  ):(  product.Status==="0001"? (
                    <p id="Field">Status : Member Not found</p>

                     ):  (  product.Status==="0002"? (
                               <p id="Field">Status : Member Name Mismatch </p>

                          ):(product.Status==="0003"? (

                           <p id="Field">Status : Member Account Closed </p>

                             ):( product.Status==="0004"? (

                               <p id="Field">Status : Member Account Suspended </p>

                                 ):( product.Status==="0005"? (

                                    <p id="Field">Status : Member Ineligible for Accrual </p>

                                      ):(  product.Status==="0099"? (

                                          <p id="Field">Status : Unable to process, please contact support for more information </p>

                                            ):( product.Status==="1111"? (

                                              <p id="Field">Status : In process. Please check back later. </p>
    
                                                ):( 
                                                        <p id="Field">Status : No known code found, Error? </p>
    
                                                         )

                                                     )))) )) )
                                                                                                
                  
                                            }
                  <p className="Field">Date of Transaction : {product.TransactionDate}</p>
              
                   <p className="Field">Transaction Amount    : {product.Amount}</p>
              </div>
              ):
              
              
              (<div></div>)}
              
           </div>


        ))}

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
        
        <img  className="bg" alt="" src="bg.jpg"/>
   
      </div>
      

  );
};
export default TransactionsPage;
/*
{product.Status==="0"?(

                        <div>
                          <p classname="Currency">Transaction Status  : Pending</p>
                          </div>
                      ):
                      (
                        <div>
                          <p classname="Currency">Transaction Status  : Successful</p>
                          </div>

                      )}
*/