import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/LoyaltyPrograms.css";
import axios from 'axios';




const LoyaltyPrograms = () => {


  const navigate = useNavigate();

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
      .get('http://localhost:5000/record')
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };





  const onBackButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);
 

  return (
    <div className="loyalty-programs">

        

      <img
      className="background-homepage-icon"
      alt=""
      src="background-homepage@2x.png"
    />

        <div className="loyalty-programs-div">Loyalty Programs</div>
        <div className="abc-bank-div2">
          <b>ABC</b>
          <span> Bank </span>
        </div>

        <div className='item-container'>
        {products.map((product) => (
          <div className="card" key = {product.id}>
          
              
              <h3>{product.LoyaltyProgramName}</h3>
              <p>{product.LoyaltyProgramCurrencyName}</p>
              <p>{product.Description}</p>
              <Link className="transfer" id ="{id}" to={`/membership-validation/${product.id}`}>Transfer Miles</Link>
            </div>


        ))}

          </div>


           

         <button className="back-button1" id="back_lp" onClick={onBackButtonClick}>
              Back
          </button>
      </div>

    );


};

export default LoyaltyPrograms;
