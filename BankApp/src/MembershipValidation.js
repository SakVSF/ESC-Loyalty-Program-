import { useState, useCallback, useEffect } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";
//import { LPName } from "./LPName_mem";
import "./css/MembershipValidation.css";

import logo from "./background-homepage@2x.png";
import bg from "./bg.jpg";

const MembershipValidation = () => {
    const [member, setmember] = useState({
        username: "",
        memberid: "",
        confirm_memberid: "",
    });
    const {location }= useLocation();

    const [isValidated, setIsValidated] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    //const id= useParams();
    const [products, SetProducts] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();

        if (member.memberid === member.confirm_memberid) {
            const userData = {
                memberid: member.memberid,
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
                    username: member.username,
                    memberid: member.memberid,
                    lpid: products.LoyaltyProgramID,
                },
            });
        }
        if (status === 0) {
            window.alert("not verified!");
        }
    };

    useEffect(() => {

      //  window.alert(location.state.username);
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



    function updatemember(value) {
        return setmember((prev) => {
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
                                value={member.username}
                                onChange={(e) =>
                                    updatemember({ username: e.target.value })
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
                                value={member.memberid}
                                onChange={(e) =>
                                    updatemember({ memberid: e.target.value })
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
                                value={member.confirm_memberid}
                                onChange={(e) =>
                                    updatemember({
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

           

            <img class="membg" alt="" src="bg.jpg" />
        </div>
    );
};

export default MembershipValidation;

