import { Link } from "react-router-dom";
import  "../styles/HomeBody.css";


function HomeBody({items}) {
  
  return (
      
      <div className="recipe_grid">
      
        {items?.map(recipe=>{
          const link= "/recipes/" + `${recipe.id}`
          
          {if(recipe.title){
          return(
            
              <div  className="item" >
              <Link to={link}>
                <div className="inside">
                
                <img src={recipe.image} alt="recipeimg" />
                <div className="title">{recipe.title}</div>

                {recipe.diets?.map(diet=>{
                  return(<div className="dietsList"><li>{ diet }</li>  </div>)
                })}
                
                
                
                </div>
              </Link>
              </div>
            
          )
        }}
        })}
      
      </div>
  );
}

export default HomeBody;