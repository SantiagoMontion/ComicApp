import axios from "axios";

export const actionTypes = {
  GET_COMICS: "GET_COMICS",
  GET_COMIC_DETAIL: "GET_COMIC_DETAIL",
  QUIT_FAVORITE: "QUIT_FAVORITE",
  SEARCH_BY_QUERY: "SEARCH_BY_QUERY",
  GET_COMIC_CHARACTERS : "GET_COMIC_CHARACTERS",
  GET_COMIC_BY_ID: "GET_RECIPE_BY_ID",
  LOADER_TRUE: "LOADER_TRUE",
  LOADER_FALSE: "LOADER_FALSE",
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_COMIC_DATA: "DELETE_COMIC_DATA",
  GET_COMIC_TEAMS: "GET_COMIC_TEAMS",
  GET_COMIC_LOCATIONS : "GET_COMIC_LOCATIONS",

};

export function getComics() {
  return function (dispatch) {
    return axios("/comics")
      .then((response) => {
        return dispatch({
          type: actionTypes.GET_COMICS,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log("ERROR GET COMICS" + e);
      });
  };
}

export function addFavorite(payload) {
  return {
    type: actionTypes.ADD_FAVORITE,
    payload: payload,
  };
}

export function getComicById(id) {
  return function (dispatch) {
    return axios(`/comics/${id}`)
      .then((resp) => {
        return dispatch({
          type: actionTypes.GET_COMIC_BY_ID,
          payload: resp.data,
        });
      })
      .catch((e) => {
        console.log("ERROR GET COMIC BY ID" + e);
      });
  };
}


export function getComicCharacters (url){
  return function (dispatch){
    return axios(`/comic/data/?url=${url}`)
      .then((resp) => {
        return dispatch({
          type: actionTypes.GET_COMIC_CHARACTERS,
          payload: resp.data,
        });
      })
      .catch((e) => {
        console.log("ERROR GET COMIC BY ID" + e);
      });
    }
  }

  export function getComicTeams (url){
    return function (dispatch){
      return axios(`/comic/data/?url=${url}`)
        .then((resp) => {
          return dispatch({
            type: actionTypes.GET_COMIC_TEAMS,
            payload: resp.data,
          });
        })
        .catch((e) => {
          console.log("ERROR GET COMIC BY ID" + e);
        });
      }
    }

    export function getComicLocations (url){
      return function (dispatch){
        return axios(`/comic/data/?url=${url}`)
          .then((resp) => {
            return dispatch({
              type: actionTypes.GET_COMIC_LOCATIONS,
              payload: resp.data,
            });
          })
          .catch((e) => {
            console.log("ERROR GET COMIC BY ID" + e);
          });
        }
      }




export function getComicsByQuery(query) {
  return function (dispatch) {
    return axios

      .get(`/search?search=${query}`)
      .then((resp) => {
        return dispatch({
          type: actionTypes.SEARCH_BY_QUERY,
          payload: resp.data,
        });
      })
      .catch((e) => {
        console.log("QUERY PARAM ERROR " + e);
      });
  };
}

export function quitFavorite(id) {
  return { type: actionTypes.QUIT_FAVORITE, payload: id };
}

export function setLoaderTrue() {
  return {
    type: actionTypes.LOADER_TRUE,
  };
}

export function setLoaderFalse() {
  return {
    type: actionTypes.LOADER_FALSE,
  };
}

