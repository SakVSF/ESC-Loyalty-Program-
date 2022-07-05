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
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { Register } from "./Register";

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

      case "/sign-in":
        title = "Sign In";
        metaDescription = "Sign In";
        break;
     
      case "/sign-out":
        title = "Sign Out";
        metaDescription = "Sign Out";
        break;

      case "/register":
        title = "Register";
        metaDescription = "Register";
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
        title = "Sign In";
        metaDescription = "Sign In";
        break;
      default:
        title = "Sign In";
        metaDescription = "Sign In";
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
      <Route path="/" element={<SignIn />} />

      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/sign-out" element={<SignOut />} />

      <Route path="/register" element={<Register />} />

      <Route path="/homepage" element={<Homepage />} />

      <Route path="/membership-validation" element={<MembershipValidation />} />

      <Route path="/loyalty-programs" element={<LoyaltyPrograms />} />

      <Route path="/transactions-page" element={<TransactionsPage />} />
    </Routes>
  );
}
export default App;
