import HomeBody from "./HomeBody"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  "../styles/Home.css";
import {getRecipes, getTypes,filterByType,sortAlpabeticaly,sortPuntuactionaly,sortSearchBar,getRecipesByQuery} from "../actions/index"
import HomeDropMenu from './HomeDropMenu.jsx';
import ErrorLogo from "../styles/img/ErrorLogo.png"
import NavBar from "./NavBar";
import Pagination, { objIndexPagination } from "./Pagination";
import Footer from "./Footer";

function Home() {

    
    
    
    const recipes = useSelector((state) => state.recipesLoaded);
    const types = useSelector((state)=> state.typesLoaded)
    const dispatch = useDispatch();



    const [currentPage, setCurrentPage] = useState(1); // Hook para manejar el paginado
    const quantityXPage = 9; //Cantidad de recetas por página
    const pages = Math.ceil(recipes.length / quantityXPage); //Cantidad total de paginas necesarias

    const [order, setOrder] = useState(""); // Hook para manejar el ordenamiento. 
    //Necesario para que se modifique el estado del componente y así re-renderice

    //Llamado a la API para obtener types y recipes
    
    
    useEffect(()=>{
      dispatch(getRecipes());
      dispatch(getTypes());
    },[])

  
   
    //Funciones de filtrado
  const handleTypeFilter = (type) => {
    dispatch(filterByType(type));
    setOrder(type);
    setCurrentPage(1);
  };


  const handleSortAlph =(type)=>{
    dispatch(sortAlpabeticaly(type));
    setOrder(type);
    setCurrentPage(1);
  }

  const handleSortPunt = (type)=>{
    dispatch (sortPuntuactionaly(type))
    setOrder(type);
    setCurrentPage(1);
  }

  const handleSearch = (array)=>{
    dispatch(sortSearchBar(array))
    setCurrentPage(1);
  }


  const handleQuery = (query)=>{
    dispatch(getRecipesByQuery(query))
    setCurrentPage(1);
  }


  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const { lastItemIndex, firstItemIndex } = objIndexPagination(
    currentPage,
    quantityXPage
  );


  const renderIf = () => {  
    if (recipes.length) {

      return <Pagination quantityXPage={quantityXPage} handlePagination={handlePagination}
      currentPage={currentPage} pages={pages}></Pagination>;

    } else {
      return( 
      <div className="Error-Container">
        <h2>Recipes not found</h2>
        <div className="Error-img">
          <img src={ErrorLogo}></img>
        </div>
      </div>
      )}
  }

  const renderIfTwo = () => {
    if (recipes.length) {
      return <Pagination quantityXPage={quantityXPage} handlePagination={handlePagination}
      currentPage={currentPage} pages={pages}></Pagination>;
  }
  }
    

  return (
    <div className="home_container">
       
        <div>
          <NavBar recipes={recipes} handleSearch={handleSearch} handleQuery={handleQuery}></NavBar>
        </div>



       <div className="DropsMenus">
          <HomeDropMenu types={types} handleFilter={handleTypeFilter} handleSortAlph={handleSortAlph} handleSortPunt={handleSortPunt} ></HomeDropMenu>
      </div>

      {renderIf()}
        
    
      <div className="HomeBody">

         <HomeBody items={recipes} handleFilter={handleTypeFilter} lastItemIndex={lastItemIndex}
            firstItemIndex={firstItemIndex} hande></HomeBody>
       </div>

       <div className="Pagination_container">
       {renderIfTwo()}
       </div>
       <Footer />
     </div>
  );
}

export default Home;