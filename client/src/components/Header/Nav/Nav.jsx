
import { Link, useNavigate } from "react-router-dom";
import  {useState, useEffect } from "react";
import logoImg from "../../../assets/logo.png";
import {jwtDecode} from "jwt-decode";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch('/api/verifyToken', {
          method: 'GET',
          credentials: 'include' 
        });
  
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
          setIsAdmin(data.isAdmin);
        } else {
          throw new Error('Authentication verification failed');
        }
      } catch (error) {
        console.error('Error verifying authentication:', error);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    };
  
    verifyUser();
  }, []);


  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include' 
      });
  
      if (response.ok) {
        setIsAuthenticated(false);
        setIsAdmin(false);
        alert("Usuario desconectado");
        navigate('/');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
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
        <button type="button" className="signin" onClick={() => navigate('/signin')}>LOGIN</button>
        </li>
        <li>
        <button type="button" className="signup" onClick={() => navigate('/signup')}>CREAR CUENTA</button>
        </li>
        </>
      ) : (
        <li>
        <button type="button" className="logout" onClick={handleLogout}>SALIR</button>
        </li>
      )}
     </ul>
    </nav>)

 
};

export default Nav;
