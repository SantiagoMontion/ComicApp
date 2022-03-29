import NavBar from "./NavBar";
import HomeBody from "./HomeBody"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  "../styles/Home.css";
import {getRecipes, getTypes} from "../actions/index"
import HomeDropMenu from './HomeDropMenu.jsx';

function Home() {

    
    const recipes = useSelector((state) => state.recipesLoaded);
    const types = useSelector((state)=> state.typesLoaded)
    const dispatch = useDispatch();
    //Llamado a la API para obtener types y recipes
    useEffect(()=>{
      dispatch(getRecipes());
      dispatch(getTypes())
    },[])
    console.log(types)
  return (
    <div className="home_container">
       <div className='nav'>
        <NavBar></NavBar>
       </div>
       <div className="DropsMenus">
          <HomeDropMenu></HomeDropMenu>
      </div>
       <div className="HomeBody">
         <HomeBody items={recipes}></HomeBody>
       </div>
     </div>
  );
}

export default Home;