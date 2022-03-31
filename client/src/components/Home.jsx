import HomeBody from "./HomeBody"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  "../styles/Home.css";
import {getRecipes, getTypes,filterByType,sortAlpabeticaly,sortPuntuactionaly} from "../actions/index"
import HomeDropMenu from './HomeDropMenu.jsx';
import Pagination from './Pagination.jsx'

function Home() {

    
    const recipes = useSelector((state) => state.recipesLoaded);
    const types = useSelector((state)=> state.typesLoaded)
    const dispatch = useDispatch();

    const [order, setOrder] = useState(""); // Hook para manejar el ordenamiento. 
    //Necesario para que se modifique el estado del componente y así re-renderice

    //Llamado a la API para obtener types y recipes
    useEffect(()=>{
      dispatch(getRecipes());
      dispatch(getTypes())
    },[])


    //Funciones de filtrado
  const handleTypeFilter = (type) => {
    dispatch(filterByType(type));
    setOrder(type);
    
  };


  const handleSortAlph =(type)=>{
    dispatch(sortAlpabeticaly(type));
    setOrder(type);
  }

  const handleSortPunt = (type)=>{
    dispatch (sortPuntuactionaly(type))
    setOrder(type);
  }
    
  return (
    <div className="home_container">
       
       <div className="DropsMenus">
          <HomeDropMenu types={types} handleFilter={handleTypeFilter} handleSortAlph={handleSortAlph} handleSortPunt={handleSortPunt}></HomeDropMenu>
      </div>
       <div className="HomeBody">

         <HomeBody items={recipes}></HomeBody>
       </div>

       <div className="Pagination_container">
         <Pagination></Pagination>
       </div>
     </div>
  );
}

export default Home;