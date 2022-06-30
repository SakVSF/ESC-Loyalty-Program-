import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Homepage } from "./Homepage";
import { MembershipValidation } from "./MembershipValidation";
import { LoyaltyPrograms } from "./LoyaltyPrograms";
import { TransactionsPage } from "./TransactionsPage";
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
      case "/homepage":
        title = "Homepage";
        metaDescription = "Homepage";
        break;
     
      case "/membership-validation":
        title = "MembershipValidation";
        metaDescription = "MembershipValidation";
        break;
      case "/loyalty-programs":
        title = "LoyaltyPrograms";
        metaDescription = "LoyaltyPrograms";
        break;
      case "/transactions-page":
        title = "TransactionsPage";
        metaDescription = "TransactionsPage";
        break;
      case "/":
        title = "Homepage";
        metaDescription = "Homepage";
        break;
      default:
        title = "Homepage";
        metaDescription = "Homepage";
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
      <Route path="/" element={<Homepage />} />

      <Route path="/homepage" element={<Homepage />} />

      <Route path="/membership-validation" element={<MembershipValidation />} />

      <Route path="/loyalty-programs" element={<LoyaltyPrograms />} />

      <Route path="/transactions-page" element={<TransactionsPage />} />
    </Routes>
  );
}
export default App;
