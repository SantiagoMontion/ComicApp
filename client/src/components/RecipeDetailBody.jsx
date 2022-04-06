import BackBtn from "../styles/img/BackBtn.png"
import  "../styles/recipeDetailBody.css";
import { Link } from "react-router-dom";

function RecipeDetailBody({recipe}) {
    const {name , plate_resume,image,diets,punctuation,healty_level,steps} = recipe;
    
    var resume = document.createElement( 'html' );
    resume.innerHTML = plate_resume;
    
    var step = document.createElement('html')
    step.innerHTML = steps;
    return (
        
        <div className="recipeDetailBody">

            <div className="BackLogo">
                <Link to="/home">
                <img className="LogoBack" src={BackBtn}></img>
                </Link>
            </div>

        <div className="infoContainer">

            <h1 className="recipe_name">{name}</h1>

            <div className="img-plate">
            <div className="img-contain">
                <img className="recipeimg" src={image}></img>
            </div>
            
            <div className="PlateResumeContainer">
                <h2>Plate Resume</h2>
                <h3 className="PlateResume">{resume.outerText}</h3>
            </div>
            
            </div>
            <div className="dietscontainer">
            {diets?.map(d=>{
                return (<h2 className="Dietsdetail">{d}</h2>)
            })}
            </div>
            

            <div className="LevelsContainer">
            <h2 className="Puntuactionh2">Punctuation</h2>
            <meter className="meters" min="0" max="100"
                low="25" high="75"
            optimum="100" value={punctuation}></meter>

            <h2 className="Healtyh2">healty_level</h2>
            <meter className="meters" min="0" max="100"
                low="25" high="75"
            optimum="100" value={healty_level}></meter>
            </div>

            <div className="StepsContainer">
            <h2>Step to Step</h2>
            <h3 className="stepsText">{step.outerText}</h3>
            </div>

        </div>  
        </div>
    );
  }
  
  export default RecipeDetailBody;