import { useState, useCallback, useEffect } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";
//import { LPName } from "./LPName_mem";
import "./css/MembershipValidation.css";

import logo from "./background-homepage@2x.png";
import bg from "./bg.jpg";

const MembershipValidation = () => {
    const [state, setState] = useState({
        username: "",
        memberid: "",
        confirm_memberid: "",
    });
    const location = useLocation();

    const [isValidated, setIsValidated] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    //const id= useParams();
    const [products, SetProducts] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();

        if (state.memberid === state.confirm_memberid) {
            const userData = {
                memberid: state.memberid,
                loyalty_currency_name: products.LoyaltyProgramName,
            };

            await fetch(`http://localhost:5001/transactions`, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    // setStatus(data);
                    // console.log(status);
                    console.log(data);
                    gotoTransfer(data.status);
                })

                .catch((err) => console.log(err));
        } else {
            window.alert("Confirm memberid not the same as memberid");
        }
    }

    const gotoTransfer = (status) => {
        if (status === 1) {
            window.alert("verified!");
            //document.getElementById("putstatus").innerHTML = "Membership Verified!";
            navigate("/transfer-miles", {
                state: {
                    username: state.username,
                    memberid: state.memberid,
                    lpid: products.LoyaltyProgramID,
                },
            });
        }
        if (status === 0) {
            window.alert("not verified!");
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            //  console.log(match.params.id);
            const id = params.id.toString();
            const response = await fetch(
                `http://localhost:5001/record/${params.id.toString()}`
            );
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
        };

        fetchProduct();

        return;
    }, [params.id, navigate]);

    const onBackButtonClick = useCallback(() => {
        navigate("/loyalty-programs", { state: { username: state.username } });
    }, [navigate]);

    function updateState(value) {
        return setState((prev) => {
            return { ...prev, ...value };
        });
    }

    return (
        <div>
            <img class="bg" alt="" src={bg} />

            <div className="container2">
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
                <img className="background-homepage1-icon" alt="" src={logo} />
            </div>

            <div className="memcontainer1">
                <div className="memgrid-container1">
                    <div className="memcard1">
                        Link your account to transfer miles{" "}
                    </div>

                    <div className="memcard1">
                        <div className="membox1">
                            <b className="primary-cardholder-b">Username</b>
                        </div>

                        <div className="membox1">
                            <input
                                className="primary-rect-input"
                                type="text"
                                required
                                name="username"
                                placeholder="Letters only"
                                value={state.username}
                                onChange={(e) =>
                                    updateState({ username: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <div className="memcard1">
                        <div className="membox1">
                            <b className="membership-number">
                                Membership Number
                            </b>
                        </div>

                        <div className="membox1">
                            <input
                                className="membership-no-rect-input"
                                type="memberid"
                                name="memberid"
                                placeholder="Digits only"
                                value={state.memberid}
                                onChange={(e) =>
                                    updateState({ memberid: e.target.value })
                                }
                                //  className="confirm-no-rect-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="memcard1">
                        <div className="membox1">
                            <b className="confirm-membership-number">
                                Confirm Membership Number
                            </b>
                        </div>

                        <div className="membox1">
                            <input
                                className="confirm-no-rect-input"
                                type="memberid"
                                name="confirm_memberid"
                                placeholder="Digits only"
                                value={state.confirm_memberid}
                                onChange={(e) =>
                                    updateState({
                                        confirm_memberid: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="memcard1">
                        <div className="membox1">
                            <button
                                type="Submit"
                                className="verify-rect-button"
                                onClick={handleSubmit}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="back-button1"
                id="back_lp"
                onClick={onBackButtonClick}
            >
                Back
            </button>

            <img class="membg" alt="" src="bg.jpg" />
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
