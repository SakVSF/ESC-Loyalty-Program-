import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { TCappLandingPage } from "./TCappLandingPage";
import { LoyaltyPartnerLogin } from "./LoyaltyPartnerLogin";
import { BankStats } from "./BankStats";
import { BankFunctions } from "./BankFunctions";
import { LPStats } from "./LPStats";
import { LPFunctions } from "./LPFunctions";
import { BankClientLogin } from "./BankClientLogin";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "TCappLandingPage ";
        metaDescription = "TCappLandingPage ";
        break;
      case "/loyalty-partner-login":
        title = "LoyaltyPartnerLogin";
        metaDescription = "LoyaltyPartnerLogin";
        break;
      case "/bank-stats":
        title = "BankStats";
        metaDescription = "BankStats";
        break;
      case "/bank-functions":
        title = "BankFunctions ";
        metaDescription = "BankFunctions ";
        break;
      case "/lp-stats":
        title = "LPStats";
        metaDescription = "LPStats";
        break;
      case "/lp-functions":
        title = "LPFunctions";
        metaDescription = "LPFunctions";
        break;
      case "/bank-client-login":
        title = "BankClientLogin ";
        metaDescription = "BankClientLogin ";
        break;
      default:
        title = "TCappLandingPage ";
        metaDescription = "TCappLandingPage ";
        break; 
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TCappLandingPage />} />
      <Route path="/homepage" element={<TCappLandingPage />} />

      <Route path="/loyalty-partner-login" element={<LoyaltyPartnerLogin />} />

      <Route path="/bank-stats" element={<BankStats />} />

      <Route path="/bank-functions" element={<BankFunctions />} />

      <Route path="/lp-stats" element={<LPStats />} />

      <Route path="/lp-functions" element={<LPFunctions />} />

      <Route path="/bank-client-login" element={<BankClientLogin />} />
    </Routes>
  );
}
export default App;
