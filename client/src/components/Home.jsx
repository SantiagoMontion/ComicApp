import HomeBody from "./HomeBody";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/Home.css";
import {
  getComics,
  getComicsByQuery,
  setLoaderTrue,
  setLoaderFalse,
} from "../actions/index";
import NavBar from "./NavBar";
import PaginationF, { objIndexPagination } from "./Pagination";
import Footer from "./Footer";
import spinner from "../styles/img/spinner.gif";
import ErrorLogo from "../styles/img/ErrorLogo.png";
import Favorites from "./Favorites";
import * as Scroll from "react-scroll";
import {BiArrowToTop} from "react-icons/bi"
function Home() {
  const favorites = useSelector((state) => state.favorites);
  const comics = useSelector((state) => state.comicsLoaded);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); // Hook para manejar el paginado
  const quantityXPage = 12; //Cantidad de recetas por página
  const pages = Math.ceil(comics.length / quantityXPage); //Cantidad total de paginas necesarias
  const spinnerLoader = useSelector((state) => state.loader);

  
  //Llamado a la API para obtener types y recipes
  useEffect(() => {
    dispatch(getComics());
    dispatch(setLoaderTrue());
  }, []);

  const handleQuery = (query) => {
    dispatch(getComicsByQuery(query));
    setCurrentPage(1);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { lastItemIndex, firstItemIndex } = objIndexPagination(
    currentPage,
    quantityXPage
  );

  const renderIfTwo = () => {
    if (comics.length) {
      return (
        <PaginationF
          quantityXPage={quantityXPage}
          handlePagination={handlePagination}
          currentPage={currentPage}
          pages={pages}
        ></PaginationF>
      );
    } else {
      setTimeout(function () {
        dispatch(setLoaderFalse());
      }, 4000);
    }
  };


  const scrollToTop =() =>{
    Scroll.animateScroll.scrollToTop();
  }

  return (
    <div>
      <NavBar handleQuery={handleQuery}></NavBar>

      {spinnerLoader ? (
        <div className="homeSpinner">
          <img src={spinner} alt="...loading" className="Spinner" />
        </div>
      ) : (
        <>
          <HomeBody
            items={comics}
            lastItemIndex={lastItemIndex}
            firstItemIndex={firstItemIndex}
            favorites={favorites}
          ></HomeBody>
        </>
      )}

      <div className="Pagination_container">{renderIfTwo()}</div>
      {!spinnerLoader ? (
        <>
          {!comics.length ? (
            <div className="Error-Container">
              <h2>comics not found</h2>
              <div className="Error-img">
                <img src={ErrorLogo}></img>
              </div>
            </div>
          ) : null}
          <div className="margin-top favorites-container-body">
            <br></br>
            <h2>Favorites</h2>
            {favorites.length ? (
              <>
                <Favorites favorites={favorites} />
              </>
            ) : (
              <div className="mt-4">
              <br></br>
                <h3>Nothing in favorites...</h3>
                <h5>Lets add some Comics!</h5>
                <br></br>
                <br></br>
              </div>
            )}
          </div>
          <button onClick={scrollToTop} className="toTop-btn"><BiArrowToTop size={30}></BiArrowToTop></button>
          <Footer />
          
        </>
      ) : null}
    </div>
  );
}

export default Home;
