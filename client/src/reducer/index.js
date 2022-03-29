
import { actionTypes } from "../actions";

const initialState = {
    recipesLoaded: [],
    recipeDetail: {},
    typesLoaded:[],
  };


function rootReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.GET_RECIPES: {
            return {
              ...state,
              recipesLoaded: action.payload,
              recipeDetail: action.payload,
            };
          }

        case actionTypes.GET_TYPES:{
          return{
            ...state,
            typesLoaded: action.payload
          }
        }

        

        default:
            return { ...state };
        }
      
    
}

export default rootReducer;
