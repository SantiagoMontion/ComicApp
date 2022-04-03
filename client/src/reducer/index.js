
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


        case actionTypes.SORT_SEARCHBAR: {
          const array = action.payload; //action.payload debería llegar como un array
          
          if (!array.length)
            return {
              ...state,
              recipesLoaded: state.allRecipes,
              filtered: state.allRecipes,
              
            };

           else {
            return {
              ...state,
              recipesLoaded: array,
              filtered: array,
            };
          }
        }


        case actionTypes.SORT_RECIPES_PUNTUACTION: {
          console.log(state.recipesLoaded)
          if (action.payload === "asc") {
            return {
                ...state,
                recipesLoaded: state.filtered.sort((a,b)=>{
                  return b.spoonacularScore - a.spoonacularScore
                })
                
              
            };
            
          } else if (action.payload === "des") {
            return {
              ...state,
              recipesLoaded: state.filtered.sort((a,b)=>{
                return a.spoonacularScore - b.spoonacularScore
              })
            };
          } 
          else {
            return { ...state, recipesLoaded: state.filtered };
          }

        }
    
        case actionTypes.SORT_RECIPES_ALPHABETICALLY: {
          if (action.payload === "asc") {

            return {
                ...state,
                recipesLoaded: state.filtered.sort((a,b)=>{
                  if(a.title > b.title) return 1
                  if(a.title< b.title) return -1
                  return 0;
                })
                
              
            };
            
          } else if (action.payload === "des") {
            return {
              ...state,
              recipesLoaded: state.filtered.sort((a,b)=>{
                if(a.title > b.title) return -1
                if(a.title < b.title) return 1
                return 0;
              })
            };
          } 
          else {
            return { ...state, recipesLoaded: state.filtered };
          }

        }

        
        case actionTypes.GET_RECIPE_BY_ID: {
          return { ...state, recipeDetail: action.payload};
        }




        default:
            return { ...state };
        }
      
    
}

export default rootReducer;
