
import { Link, useNavigate } from "react-router-dom";
import  {useState } from "react";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsAuthenticated(false); 
    alert("Usuario desconectado")
    navigate('/');
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return(
    <nav>
      <ul className="nav-bar">
        <li className="nav-link">
          <Link to="/" 
          className="nav-link-active"
          onClick={scrollToTop}
          >Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/reservations" 
          className="nav-link"
          onClick={scrollToTop}
          >Reservations</Link>
        </li>
        <li className="nav-link">
          <Link to="/createrestaurant" 
          className="nav-link"
          onClick={scrollToTop}
          >Create Restaurant</Link>
        </li>
        <li className="nav-link">
          <Link to="/reservationsusers" 
          className="nav-link"
          onClick={scrollToTop}
          >User Reservations</Link>
        </li>
      </ul>
      {!isAuthenticated ? (
          <button type="button" onClick={handleLogout}>SALIR</button>
        ) : (
          <>
            <button type="button" onClick={() => navigate('/signin')}>LOGIN</button>
            <button type="button" onClick={() => navigate('/signup')}>CREAR CUENTA</button>
          </>
        )}
    </nav>)

 
};

export default Nav;
