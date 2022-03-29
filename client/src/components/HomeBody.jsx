import { Link } from "react-router-dom";
import  "../styles/HomeBody.css";


function HomeBody({items,typesarray}) {
  
  return (
      
      <div className="body_container">
      <ul >
        {items?.map(recipe=>{
          // console.log(typesarray[1][0].name)
          if (items[typesarray.name]){
            console.log('hola')
          }
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