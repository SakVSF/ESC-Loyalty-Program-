import { useCallback, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RewardsToDisplay } from "./RewardsToDisplay";
import "./css/Homepage.css";

export const Homepage = () => {
  const navigate = useNavigate();

  const onTransactionsPageTextClick = useCallback(() => {
    navigate("/transactions-page");
  }, [navigate]);

  const onSignOutLinkClick = useCallback(() => {
    navigate("/sign-out");
  }, [navigate]);

  const onViewLoyaltyProgramsClick = useCallback(() => {
    navigate("/loyalty-programs");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="homepage-div">
      <img
        className="background-homepage-icon"
        alt=""
        src="background-homepage@2x.png"
      />
      <div className="transfer-rewards-div">Transfer Rewards </div>
      <div
        className="transactions-page-div"
        onClick={onTransactionsPageTextClick}
      >
        Transactions Page{" "}
      </div>
      <Link
        className="sign-out-a"
        to="/sign-out"
        id="sign_out"
        onClick={onSignOutLinkClick}
      >
        Sign out{" "}
      </Link>
      <div className="container-rewards-div" data-animate-on-scroll />
      <div className="transfer-your-rewards">Transfer Your Rewards </div>
      <div className="abc-bank-div">ABC Bank </div>
      <div className="abcbank-header-div">
        <b>ABC</b>
        <span> Bank </span>
      </div>
      <div className="use-your-miles-for-the-things">
        Use your miles for the things that matter the most.
      </div>
      <img
        className="transfer-logo-1-icon"
        alt=""
        src="transfer-logo-1@2x.png"
      />
      <button
        className="view-loyalty-programs"
        id="view_loyalty"
        onClick={onViewLoyaltyProgramsClick}
      >
        View Loyalty Programs
      </button>
      <img
        className="homepage-picture-icon"
        alt=""
        src="homepage-picture@2x.png"
      />
      <div className="customer-engagement-made-simp">
        Customer Engagement. Made Simple.
      </div>
      <div className="rewards-div">rewards</div>
      <RewardsToDisplay />
    </div>
  );
};
