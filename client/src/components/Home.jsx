import HomeBody from "./HomeBody"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  "../styles/Home.css";
import {getRecipes, getTypes,filterByType,sortAlpabeticaly,sortPuntuactionaly,sortSearchBar} from "../actions/index"
import HomeDropMenu from './HomeDropMenu.jsx';
import Pagination from './Pagination.jsx'
import ErrorLogo from "../styles/img/ErrorLogo.png"
import NavBar from "./NavBar";
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

  const handleSearch = (array)=>{
    dispatch(sortSearchBar(array))
    
  }


  const renderIf = () => {  
    if (recipes.length) {
      return <Pagination></Pagination>;
    } else {
      return <div>
        <h2>Recipes not found</h2>
        <img src={ErrorLogo} className="LogoError"></img>
        </div>
    }
  }

  const renderIfTwo = () => {
    if (recipes.length) {
      return <Pagination></Pagination>;
  }
  }
    


  return (
    <div className="home_container">
       
        <div>
          <NavBar recipes={recipes} handleSearch={handleSearch}></NavBar>
        </div>



       <div className="DropsMenus">
          <HomeDropMenu types={types} handleFilter={handleTypeFilter} handleSortAlph={handleSortAlph} handleSortPunt={handleSortPunt}></HomeDropMenu>
      </div>

      {renderIf()}
        
    
      <div className="HomeBody">

         <HomeBody items={recipes} handleFilter={handleTypeFilter}></HomeBody>
       </div>

       <div className="Pagination_container">
       {renderIfTwo()}
       </div>
     </div>
  );
}

export default Home;