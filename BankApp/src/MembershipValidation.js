import { useState, useCallback, useEffect} from "react";
import { TransferPopup } from "./TransferPopup";
import { PortalPopup } from "./PortalPopup";
import { useNavigate, useParams} from "react-router-dom";
//import { LPName } from "./LPName_mem";
import "./css/MembershipValidation.css";

import logo from "./background-homepage@2x.png";
import bg from "./bg.jpg";




const MembershipValidation = () => {

  //const initialValues = { username: "", memberid: "", confirm_memberid: "" };
 // const [formValues, setFormValues] = useState(initialValues);
  //const [formErrors, setFormErrors] = useState({});

  const [state, setState]= useState({username:"", memberid:"", confirm_memberid:""})



  //const [isSubmit, setIsSubmit] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const [isTransferPopupOpen, setTransferPopupOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  


  //const id= useParams();
  const [products, SetProducts] = useState({});
/*
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

    
    //setState({ ...state, [name]:value});

  };
  */

  async function handleSubmit (e) {
    e.preventDefault();

      const userData = {
   
        memberid: state.memberid,
        loyalty_currency_name: products.LoyaltyProgramName,
      
      };
    
     
      const response= await fetch(`http://localhost:5000/transactions`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
       
      }
      
      );
   

      const code = response.status;
      if(code===200){
        setIsValidated(true);
      }
      if(code===304){
        setIsValidated(false);
      }

      /*
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
  
      const record = await response.json();
      window.alert("reached record");
     
      window.alert(JSON.stringify(record));
      setIsValidated(true);
*/
      

    }

    
    //setState(...state, ["loyalty_currency_name"]: products.name)
    //setFormErrors(validate(formValues));
    //setIsSubmit(true);

    //if(Object.keys(formErrors).length === 0){
      
/*
       axios.post("https://localhost:5000/transactions", userData).then((response) => {
        window.alert(response.status);
        console.log(response.data);
        if(response.ok){
          window.alert("ok");
          setIsValidated(true);
        }
        else{
          window.alert("!!!");
          setIsValidated(true);
        }
      });

   // }
*/

 


  useEffect(() => { 
  const fetchProduct = async () => {
      //  console.log(match.params.id);
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      SetProducts(record);
     window.alert(JSON.stringify(record));

    }

    fetchProduct();

    return;
  }, [params.id,  navigate]);
/*
      await   axios
        .get(
         `http://localhost:5000/record/${_id}`
          //`https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`
        )
        .then((res) => {
          SetProducts(res.data);
          
        })
        .catch((err) => console.log(err));
      };*/



    //console.log(formErrors);
    //if (Object.keys(formErrors).length === 0 && isSubmit) {
    ////  console.log(formValues);
    //}

  //}, [formErrors]);  // eslint-disable-line react-hooks/exhaustive-deps
  


   

    
      
     



 
/*

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
*/

  const openTransferPopup = useCallback(() => {
    setTransferPopupOpen(true);
  }, []);

  const closeTransferPopup = useCallback(() => {
    setTransferPopupOpen(false);
  }, []);

  const onBackButtonClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);

  function updateState(value) {
    return setState((prev) => {
      return { ...prev, ...value };
    });
  }
  


  return (


    <div>

        <img  class="bg" alt="" src={bg}/>


        <div className = "container2">
          <div className="grid-container2">
              <div className="card2">
                        <div>
                          <b>ABC Bank</b>
                        </div>
                    </div>

              
                <div className="card2">
                    <div className="membership-validation">
                      Membership Validation{" "}
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


      
      <div className="memcontainer1">
        <div className="memgrid-container1">
        
        

          <form onSubmit={handleSubmit}>

          <div className="memcard1">
          Link your account to transfer miles </div>

            
              <div className="memcard1">
                  <div className="membox1">
                     
                     <b className="primary-cardholder-b">Primary Cardholder</b>

                    </div>

                  <div className="membox1">

                          <input

                            className="primary-rect-input"
                            type="text"
                            required
                            name="username"
                            placeholder="Letters only"
                            value={state.username}

                            onChange={(e) => updateState({ username: e.target.value })}
                         

                         />
                  </div>

                </div>

                


              <div className="memcard1">

                  <div className="membox1">
                      <b className="membership-number">Membership Number</b>

                  </div>

                  <div className="membox1">
                    <input
                      className="memberhsip-no-rect-input"
                    
                      type="memberid"
                      name="memberid"
                      placeholder="Digits only"
                      value={state.memberid}
                      
                      onChange={(e) => updateState({ memberid: e.target.value })}
                    //  className="confirm-no-rect-input"
                      required
                    />
                  </div>
              </div>

              <div className="memcard1">
                  <div className="membox1">

                      <b className="confirm-membership-number">Confirm Membership Number</b>
                   </div>

                  <div className="membox1"> 
                    
                    <input
                      className="confirm-no-rect-input"
                      type="memberid"
                      name="confirm_memberid"
                      placeholder="Digits only"
                      value={state.confirm_memberid}
                      onChange={(e) => updateState({ confirm_memberid: e.target.value })}
                      required
                    />
                  </div>

              </div>


              <div className="memcard1">
                  <div className="membox1">
                
                  <button type="Submit" className="verify-rect-button">Verify</button>
   
                  </div>

              </div>
           
          </form>


          
          { isValidated ? (

            <div className="memcard1">
             <div className="membox1">
                <div >Membership Validated! </div>
                <button classname="verify-rect-button"onClick={openTransferPopup}>Click to Transfer</button>
            </div>
            </div>
          ) : 
          (<div className="memcard1">
            <div className="membox1"> Validating
            </div>
            
            </div>)
        }
      
          


        </div>

    </div>



        <button className="back-button1" id="back_lp" onClick={onBackButtonClick}>
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
        
        <img  class="membg" alt="" src="bg.jpg"/>
   

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

              <p className="memberid-error">{formErrors.memberid}</p>

*/