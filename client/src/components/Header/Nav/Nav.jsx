
import { Link, useNavigate } from "react-router-dom";
import  {useState, useEffect } from "react";
import logoImg from "../../../assets/logo.png";
import {jwtDecode} from "jwt-decode";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const tokenAdmin = decoded.admin === true
      setIsAuthenticated(true);
      setIsAdmin(tokenAdmin)
    } else {
      setIsAuthenticated(false)
      setIsAdmin(false)
    }
  }, []);


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
          ><img src={logoImg}></img></Link>
        </li>
        <li className="nav-link">
          <Link to="/" 
          className="nav-link-active"
          onClick={scrollToTop}
          >Home</Link>
        </li>
        {isAuthenticated ? (
        <li className="nav-link">
          <Link to="/reservations" 
          className="nav-link"
          onClick={scrollToTop}
          >Reservas</Link>
        </li>) : (null)}


        {isAdmin ? (
          <>
        <li className="nav-link">
          <Link to="/createrestaurant" 
          className="nav-link"
          onClick={scrollToTop}
          >Crear restaurante</Link>
        </li>
        <li className="nav-link">
          <Link to="/reservationsusers" 
          className="nav-link"
          onClick={scrollToTop}
          >Control de reservas</Link>
        </li>
        </>)
        : (null)}

      {!isAuthenticated ? (
        <>
        <li>
        <button type="button" onClick={() => navigate('/signin')}>LOGIN</button>
        </li>
        <li>
        <button type="button" onClick={() => navigate('/signup')}>CREAR CUENTA</button>
        </li>
        </>
      ) : (
        <li>
        <button type="button" onClick={handleLogout}>SALIR</button>
        </li>
      )}
     </ul>
    </nav>)

 
};

export default Nav;
