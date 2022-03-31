
import { actionTypes } from "../actions";

const initialState = {
    recipesLoaded: [],
    allRecipes: [], //Contiene todas las recetas
    recipeDetail: {}, //detalles de la receta
    typesLoaded:[], //todos los tipos de dietas
    filtered:[], //contiene las recipes filtradas
  };


function rootReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.GET_RECIPES: {
            return {
              ...state,
              recipesLoaded: action.payload,
              recipeDetail: action.payload,
              allRecipes: action.payload,
              filtered: action.payload,
            };
          }

        case actionTypes.GET_TYPES:{
          return{
            ...state,
            typesLoaded: action.payload
          }
        }


        case actionTypes.GET_RECIPE_BY_ID: {
          return { ...state, recipeDetail: action.payload };
        }
    
        case actionTypes.SEARCH_RECIPE: {
          return { ...state, recipeDetail: action.payload};
        }


    
        case actionTypes.FILTER_RECIPES_BY_TYPE: {
          const type = action.payload; //types debería llegar como un string "Vegan"

          if (type === "default")
            return {
              ...state,
              recipesLoaded: state.allRecipes,
              filtered: state.allRecipes,
              
            };

          else {
            
            let recipesFiltered = state.allRecipes?.filter((recipe) => {
              if(recipe.diets){
                return recipe.diets.includes(type);
              }
            });
            return {
              ...state,
              recipesLoaded: recipesFiltered,
              filtered: recipesFiltered,
            };
          }
        }


        // case actionTypes.SORT_POKEMONS_BY_STRENGTH: {
        //   if (action.payload === "asc") {
        //     return {
        //       ...state,
        //       pokemons: state.filtered?.slice().sort((a, b) => {
        //         return b.attack - a.attack;
        //       }),
        //     };
        //   } else if (action.payload === "desc") {
        //     return {
        //       ...state,
        //       pokemons: state.filtered?.slice().sort((a, b) => {
        //         return a.attack - b.attack;
        //       }),
        //     };
        //   } else {
        //     return { ...state, pokemons: state.filtered };
        //   }
        // }
    
        case actionTypes.SORT_RECIPES_ALPHABETICALLY: {
          console.log(state.recipesLoaded)
          if (action.payload === "asc") {

            return {
                ...state,
                recipesLoaded: state.allRecipes.sort()
                
              
            };
            
          } else if (action.payload === "desc") {
            return {
              ...state,
              recipesLoaded: state.filtered.reverse(),
            };
          } 
          else {
            return { ...state, recipesLoaded: state.filtered };
          }

        }

        

        default:
            return { ...state };
        }
      
    
}

export default rootReducer;
