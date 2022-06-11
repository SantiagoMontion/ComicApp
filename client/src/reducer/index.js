import { actionTypes } from "../actions";

const initialState = {
  comicsLoaded: [],
  allcomics: [], //Contiene todas las recetas
  comicDetail: {}, //detalles de la receta
  filtered: [], //contiene las comics filtradas
  loader: true,
  favorites: [],
  comicCharacters:[],
  comicTeams:[],
  comicLocations:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COMICS: {
      return {
        ...state,
        comicsLoaded: action.payload,

        loader: false,
      };
    }

    case actionTypes.ADD_FAVORITE: {
      if (!state.favorites.includes(action.payload)) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
    }

    case actionTypes.QUIT_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((p) => {
          return p.id !== action.payload;
        }),
      };
    }

    case actionTypes.GET_COMIC_CHARACTERS:{    
      return{
        ...state,
        comicCharacters: [...state.comicCharacters, action.payload],
        
      }
    
    }

    case actionTypes.GET_COMIC_TEAMS:{    
      return{
        ...state,
        comicTeams: [...state.comicTeams, action.payload],
        
      }
    
    }

    case actionTypes.GET_COMIC_LOCATIONS:{    
      return{
        ...state,
        comicLocations: [...state.comicLocations, action.payload],
        
      }
    
    }

    case actionTypes.DELETE_COMIC_DATA:{    
      return{
        ...state,
        comicData: []
       
      }
    
    }

    case actionTypes.GET_COMIC_BY_ID: {
      return { ...state,comicDetail: action.payload };
    }

    case actionTypes.SEARCH_COMIC: {
      return { ...state, comicDetail: action.payload };
    }

    case actionTypes.GET_COMIC_BY_ID: {
      return { ...state, comicDetail: action.payload };
    }

    case actionTypes.SEARCH_BY_QUERY: {
      return {
        ...state,
        comicsLoaded: action.payload,
      };
    }

    case actionTypes.LOADER_TRUE: {
      return {
        ...state,
        loader: true,
      };
    }

    case actionTypes.LOADER_FALSE: {
      return {
        ...state,
        loader: false,
      };
    }

    case actionTypes.GET_LOADER:{
      return{...state,loader:state.loader}
    }

    default:
      return { ...state };
  }
}

export default rootReducer;
