import { useState, useCallback, useEffect} from "react";
import { TransferPopup } from "./TransferPopup";
import { PortalPopup } from "./PortalPopup";
import { useNavigate, useParams, Link } from "react-router-dom";
//import { LPName } from "./LPName_mem";
import "./css/MembershipValidation.css";
import axios from 'axios';
import logo from "./background-homepage@2x.png"


const MembershipValidation = ({match}) => {

  const initialValues = { username: "", memberid: "", confirm_memberid: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [state, setState]= useState({loyalty_currency_name:""})



  const [isSubmit, setIsSubmit] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const [isTransferPopupOpen, setTransferPopupOpen] = useState(false);
  const navigate = useNavigate();

  


  //const id= useParams();
  const [products, SetProducts] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    
    //setState({ ...state, [name]:value});

  };

  const handleSubmit = (e) => {
    e.preventDefault();


    //setState(...state, ["loyalty_currency_name"]: products.name)
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if(Object.keys(formErrors).length === 0){
      const userData = {
        loyalty_currency_name: state.loyalty_currency_name,
        memberid: formValues.memberid
      };
      axios.post("https://localhost:5000", userData).then((response) => {
        console.log(response.status);
        console.log(response.data);
        if(response.data==="Membership number is ok"){
          setIsValidated(true);
        }
        else{
          setIsValidated(false);
        }
      });

    }


  };

  
  useEffect(() => { 
    fetchProduct();
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  
  }, [formErrors]);  // eslint-disable-line react-hooks/exhaustive-deps
  

    const fetchProduct = async () => {
      axios
      .get(
        `http://localhost:5000/record/?id=${match.params.id}`
      )
      .then((res) => {
        SetProducts(res.data);
        setState({loyalty_currency_name: res.data.LoyaltyProgramName});
      })
      .catch((err) => console.log(err));
    };
      
     



 


  const validate = (values) => {
    const errors = {};
    const regex =  /^\d+$/;
    const regex1 = /^[A-Za-z]*$/ ;
    if (!values.username) {
      errors.username = "Primary Cardholder name is required!";
    }
    else if(!regex1.test(values.username)) {
      errors.username = "Primary Cardholder should only contain letters";
   }
    if (!values.memberid) {
      errors.memberid = "Membership Number is required!";
    } 
   
    else if (!regex.test(values.memberid)) {
      errors.memberid = "Membership Number should only contain digits";
   }
    if (!values.confirm_memberid) {
      errors.confirm_memberid = "Please confirm membership number";
    } 
    else if (!regex.test(values.confirm_memberid)) {
      errors.confirm_memberid = "Membership Number should only contain digits";
   }
   
    else if(values.memberid!==values.confirm_memberid) {

      errors.confirm_memberid = "Confirm Membership Number does not match Membership Number";
    }
    return errors;
  }; 


  const openTransferPopup = useCallback(() => {
    setTransferPopupOpen(true);
  }, []);

  const closeTransferPopup = useCallback(() => {
    setTransferPopupOpen(false);
  }, []);

  const onBackButtonClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);




  return (


    <div className="membership-validation-div">

      <img
        className="background-homepage-icon"
        alt=""
        src={logo}
      />
          
                
        
      

        <div className="link-your-div">Link your account to start </div>
        <div className="transfer-miles-div">Transfer Miles</div>
        <div className="abc-bank-div1">
            <b>ABC</b>
            <span> Bank </span>
          </div>
        <div className="once-linked-we-will-use-this">
                  Once linked, we will use this membership for your future mile
                  transfers
        </div>

      


      
          { isValidated ? (
            <div>
                <div  classname="success-message">Membership Validated! Click to transfer points.</div>
                <button  classname="success-button" onClick={openTransferPopup}>Transfer</button>
            </div>
          ) : (<div className="success message">Memership Validation failed</div>)
        }
          

      <div className="container">
        
        

          <form onSubmit={handleSubmit}>

            
              <div className="form">
                  <div className="field">
                    <b className="primary-cardholder-b">Primary Cardholder</b>
                          <input

                            className="primary-rect-input"
                            type="text"
                            name="username"
                            placeholder="Primary Cardholder"
                            value={formValues.username}

                            onChange={handleChange}
                            required

                         />
                  </div>

                  <p className="username-error">{formErrors.username}</p>


                  <div className="field">
                    <b className="membership-number">Membership Number</b>
                    <input
                      className="memberhsip-no-rect-input"
                    
                      type="memberid"
                      name="memberid"
                      placeholder="Membership Number"
                      value={formValues.memberid}
                      
                      onChange={handleChange}
                    //  className="confirm-no-rect-input"
                      required
                    />
                  </div>


                  <p className="memberid-error">{formErrors.memberid}</p>


                  <div className="field">
                    <b className="confirm-membership-number">Confirm Membership Number</b>
                    <input
                      className="confirm-no-rect-input"
                      type="memberid"
                      name="confirm_memberid"
                      placeholder="Confirm Membership Number"
                      value={formValues.confirm_memberid}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <p className="confirm-memberid-error">{formErrors.memberid}</p>
                  <button className="verify-rect-button">Submit</button>

                  
                 
            </div>
           
          </form>

        </div>

        


      
        
        
        

     
            

        
        <button
            className="back-button"
            id="back_membership"
            onClick={onBackButtonClick}
          >
            Back
          </button>
        

        {isTransferPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeTransferPopup}
          >
            <TransferPopup onClose={closeTransferPopup} />
          </PortalPopup>
                )}


   </div>
  );
};

export default MembershipValidation;


/*
const [data, setData] = useState([]);
  useEffect( () =>{
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios
      .get(
        `https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`  //edit url
      )
      .then((res) => {
        setData(res.data);
        
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  
        {products.map((product) => {
          return (

              );
           

        })}


    ----------------
      
        <div className="product-container" >
            
            <div className="lp-name-div" id="LP_name_membership"> {products.name}</div>;
                        
        </div>

           <div className="account-to-start">account to start</div>

*/