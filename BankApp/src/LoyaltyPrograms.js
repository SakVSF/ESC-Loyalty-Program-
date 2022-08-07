import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./css/LoyaltyPrograms.css";
import axios from 'axios';




const LoyaltyPrograms = () => {


  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);

/*
  useEffect( () => {
    fetchProducts();
  } , []);

  const fetchProducts = () => {
    axios 
    .get('https://shoppingapiacme.herokuapp.com/shopping') 
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

*/
  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = () => {
    axios
      .get(
        `http://localhost:5001/record`
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
    window.alert(location.state.username);
    
    navigate("/homepage", {state:{username:location.state.username}});
  }, [navigate]);
 

  return (
    <div >

        

            <div className = "lpcontainer1">

            <div className="lpgrid-container1">

                <div className="lpcard1">
                          <div>
                            <b>ABC Bank</b>
                          </div>
                      </div>

                
                  <div className="lpcard1">
                      <div className="loyalty-programs">
                        Loyalty Programs
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

        <div className='container-lp'>
        {products.map((product) => (
          <div className="cardlp" key = {product._id}>
          
              
              <h3 classname="Name">{product.LoyaltyProgramName}</h3>
              <p classname="Currency">{product.LoyaltyProgramCurrencyName}</p>
              <p classname="Description">{product.Description}</p>
              <Link className="transfer" id ="{key}" to={{pathname: `/membership-validation/${product._id}`, state:{username:location.state.username}}}>Transfer Miles</Link>
            </div>


        ))}

          </div>


           

         <button className="back-button1" id="back_lp" onClick={onBackButtonClick}>
              Back
          </button>

          
        <img  class="lpbg" alt="" src="bg.jpg"/>
   
      </div>

    );


};

export default LoyaltyPrograms;
