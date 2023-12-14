
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();

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
      <div>
        <button type="button"
        onClick= {() => navigate('/signin')}>LOGIN</button>
        <button type="button"
        onClick= {() => navigate('/signup')}>CREAR CUENTA</button>
        <button type="button"
        onClick= {() => navigate('/signout')}>SALIR</button>
      </div>
    </nav>)

 
};

export default Nav;
