import { Link } from "react-router-dom";
import  "../styles/HomeBody.css";


function HomeBody({items}) {
  
  return (
      
      <div className="body_container">
      <ul >
        {items?.map(recipe=>{
        
          return(
            <div className="recipeContainer" >
              <li key={recipe.id}>
                
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt="recipeimg" />
                

              </li>
            </div>
          )
        })}
      </ul>
      </div>
  );
}

export default HomeBody;