import Nav from "./Nav/Nav"
import { useLocation } from "react-router-dom";
const Header = () => {

  const location = useLocation();

  const displayNav = ()=> {
    const noNav =  ["/signin", "/signup"];
    return !noNav.includes(location.pathname);
  }
  return (
    <div>
      {displayNav() && <Nav />}
    </div>
  );
};

export default Header;
