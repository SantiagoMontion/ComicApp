import { Link } from "react-router-dom";
import  "../styles/HomeBody.css";


function HomeBody({items,typesarray}) {
  
  return (
      
      <div className="recipe_grid">
      
        {items?.map(recipe=>{
          
          return(
            
              <div className="item">
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt="recipeimg" />                
              <h4>{recipe.diets}</h4>
              
              </div>
            
          )
        })}
      
      </div>
  );
}

export default HomeBody;