import  "../styles/NavBar.css";
import Logo from "../styles/img/LogoNav.png"
import LogoSearch from "../styles/img/LogoSearch.png"
import { Link } from "react-router-dom";


function NavBar() {
  let name;

  //funcion para obtener el valor del input
  // function getValue(e){
  //   e.preventDefault()
  //   if(e){

  //   }
  // }

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
      <input value={name} placeholder="   Buscar..."></input>

      <Link to="/recipes/?name=pasta" style={{textDecoration: 'none'}}>
      <div className="search_container">
        <img  src={LogoSearch}></img>
      </div>
      </Link>
      </div>
    </div>
  );
}

export default NavBar;