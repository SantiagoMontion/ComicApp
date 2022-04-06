import  "../styles/NavBar.css";
import Logo from "../styles/img/LogoNav.png"
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import HomeBody from "./HomeBody";

function NavBar({recipes,handleSearch}) {



  const [state, setState] = useState("") //funcion para manejar el estado del searchbar

  //funcion para obtener el valor del input
  const handleChange = e => {
    setState(e.target.value);
  };

  useEffect(() => {
    if(state ===''){
      handleSearch([])
      return
    }
    let results = recipes.filter(r =>{
    if(r.title){
      return (r.title.toLowerCase().includes(state))
    }
    });
    handleSearch(results)
  }, [state]);



  return (
    <div>
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

      <input type="text"  onChange={handleChange} value={state} placeholder="   Buscar..."></input>

      
      </div>
      <div className="CreateRecipe">
        <Link to="/new-recipe">
        <h2>Create Recipe</h2>
        </Link>
      
      </div>
    </div>
    </div>
  );
}

export default NavBar;