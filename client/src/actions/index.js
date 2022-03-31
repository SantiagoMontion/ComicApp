import axios from "axios";



export const actionTypes = {
    GET_RECIPES: "GET_RECIPES",
    GET_RECIPES_DETAIL: "GET_RECIPES_DETAIL",
    GET_TYPES: "GET_TYPES",

    GET_RECIPE_BY_ID: "GET_RECIPE_BY_ID",
    SEARCH_RECIPE: "SEARCH_RECIPE",
    FILTER_RECIPES_BY_TYPE: "FILTER_RECIPES_BY_TYPE",
    SORT_RECIPES_ALPHABETICALLY: "SORT_RECIPES_ALPHABETICALLY"
  };


export function getTypes() {
    return function (dispatch) {
      return axios("/types")
        .then((resp) => {
          return dispatch({
            type: actionTypes.GET_TYPES,
            payload: resp.data });
        })
        .catch((e) => {
          console.log(e);
        });
    };
  }
  
  export function getRecipes() {
    return function (dispatch) {
        
        return axios("/recipes")
            .then((response) => {
            return dispatch({
                type: actionTypes.GET_RECIPES,
                payload: response.data,
          });
        })
        .catch((e) => {
          console.log("ERROR GET RECIPES" + e);
        });
    };
}

export function filterByType(type){
  return {
    type: actionTypes.FILTER_RECIPES_BY_TYPE,
    payload: type,
  };
  
}

export function sortAlpabeticaly(type){
  return{
    type: actionTypes.SORT_RECIPES_ALPHABETICALLY,
    payload: type,
  };
}

