import  "../styles/recipeDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getRecipeById} from "../actions/index"
import RecipeDetailBody from './RecipeDetailBody.jsx'


function RecipeDetail(props) {
  const recipesFiltered = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getRecipeById(props.match.params.id));
    
  },[])

  return (
      
      <div className="recipeDetailContainer">
      <RecipeDetailBody recipe={recipesFiltered}></RecipeDetailBody>
      </div>
  );
}

export default RecipeDetail;