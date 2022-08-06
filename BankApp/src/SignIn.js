import { useCallback, useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import "./css/SignIn.css";
import "./bg.jpg";
import "./App.js"
import axios from 'axios';


export const SignIn = () => {
  const navigate = useNavigate();

  const [getinfo, setInfo] = useState([])

  useEffect(() => {
    fetchProducts();
  }, []);

 //const [Isusername, setIsusername] = useState("false");
 //const [Ispassword, setIspassword] = useState("false");
  const fetchProducts = () => {
    axios
      .get(
        `http://localhost:5000/members`
    
        )
      .then((res) => {
        // console.log(res);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const [state, setState]= useState({username:"", password:""})

  function updateState(value) {
    return setState((prev) => {
      return { ...prev, ...value };
    });
  }


  async function handleSubmit (e) {
    e.preventDefault();
    const my_arr= getinfo.map(  item => item.Username===state.username);
    if(my_arr.includes(true)){
      const my_arr_pass= getinfo.map(  item => item.Password===state.password);
      if(my_arr_pass.includes(true)){
       // window.alert("Successful Login!");
        navigate("/homepage", {state:{username:state.username}});

      }

    }
 

      }
    
    
      


      

    
  
  return (
    <div>
      <img  className="bg" alt="" src="bg.jpg"/>


      <div className = "container2">
        <div className="grid-container2">
            <div className="card2">
                      <div>
                        <b>ABC Bank</b>
                      </div>
                  </div>

             
              <div className="card2">
                  <div className="loyalty-program-marketplace">
                    Loyalty Program MarketPlace{" "}
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


      
      

    
     
      <form onSubmit={handleSubmit}>

      <div className="container1">
        <div className="grid-container1">
        

            <div className="card1">
                  <div className="box1">

                        <b className="username-b">Username </b>
                        </div>

                  <div className="box1">
                          <input

                          className="username_rect"
                          type="text"
                          required
                          id="username_signin"
                          value={state.username}
                          placeholder="Username"

                            onChange={(e) => updateState({ username: e.target.value })}
                          />
                  </div>
          
                  

                  

            </div>

          <div className="card1">
               <div className="box1">


                    <b className="password-b">Password </b>
                </div>

              <div className="box1">
            
                <input
                  className="password_rect"
                  type="password"
                  required
                  id="password_signin"

                  placeholder="Password"
                  value={state.password}
                  
                  onChange={(e) => updateState({ password: e.target.value })}
                //  className="confirm-no-rect-input"
                
                />
                </div>
   

             


            </div>

          

          <div className="card1">
            
              <div className="box1">
                      <button
                      type="Submit"
                        className="sign-in-button"
                        id="sign_in"
                      >
                        Sign In{" "}
                      </button>
                      </div>

            </div>
        </div>


 
      </div>

   

  
      </form>

      <div className="container3">
        <div className="grid-container3">
        <div className="card3">
          <div className="customer-engagement">
            Customer Engagement. Made Simple.
          </div>
          </div>
          </div>


      </div>

    <div>
      <img
        className="homepage-picture-icon"
        alt=""
        src="homepage-picture@2x.png"
      />

    </div>
    </div>
  );
};
