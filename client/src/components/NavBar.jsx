import  "../styles/NavBar.css";
import Logo from "../styles/img/LogoNav.png"
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className='nav_container'>
      
      <Link to="/home">
      <div className="nav_logo">
      <img src={Logo}></img>
      </div>


      </Link>
      <Link to="/home">
      <div className="Navh2">
      <h2>Henry Food</h2>
  
      </div>
      </Link>
      <div className="input_container">
      <input placeholder="   Buscar..."></input>
      </div>
    </div>
  );
}

export default NavBar;