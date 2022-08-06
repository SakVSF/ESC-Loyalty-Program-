import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import "./css/TransactionsPage.css";

export const TransactionsPage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const location = useLocation();

  const [status, setStatus] = useState([]);



  useEffect(() => {
    fetchProducts();
    fetchStatus();
  }, []);

  
  const fetchStatus = async () => {
      const userData = {
        
          Username: location.state.username,
        
        };

    /* 

      const response = await fetch(`http://localhost:5000/status`, 
      {
        method: "GET",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
       
      }
      
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const record = await response.json();
      window.alert(JSON.stringify(record));
      if (!record) {
        window.alert(`Transaction not found`);
        navigate("/");
        return;
      }

      setStatus(record);
      window.alert(status);
    }
    */
 
    await fetch(`http://localhost:5000/status`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
       
      }
      
      ).then((res) =>  res.json()).then((data)=>setStatus(data))
        
        
      .catch((err) => console.log(err));
    }




  


  const fetchProducts = () => {
    axios
      .get(
        `http://localhost:5000/transactions`
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


          <div className='container-lp'>
        {products.map((product) => (
        
          <div  key = {product._id}>
          
              {product.Username===location.state.username?(

              <div className="cardlp">
         
                  <p className="Currency">Loyalty Program Name : {product.LoyaltyProgramID}</p>
                  
                  <p className="Currency">Transaction Status  : {status.status}</p>
   

                  

                  <p className="Currency">Date of Transaction : {product.TransactionDate}</p>
              
                   <p className="Description">Transaction Amount    : {product.Amount}</p>
              </div>
              ):
              
              
              (<div></div>)}
              
           </div>

        ))}

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