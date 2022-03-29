import axios from "axios";



export const actionTypes = {
    GET_RECIPES: "GET_RECIPES",
    GET_RECIPES_DETAIL: "GET_RECIPES_DETAIL",
    GET_TYPES: "GET_TYPES"
  };


export function getTypes() {
    return function (dispatch) {
      return axios("/types")
        .then((resp) => {
          return dispatch({ type: actionTypes.GET_TYPES, payload: resp.data });
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