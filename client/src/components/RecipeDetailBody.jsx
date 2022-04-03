



function RecipeDetailBody({recipe}) {
    const {name , plate_resume,image,diets,punctuation,healty_level,steps} = recipe;
    
    var resume = document.createElement( 'html' );
    resume.innerHTML = plate_resume;
    
    var step = document.createElement('html')
    step.innerHTML = steps;
    // const links = el.getElementsByTagName( 'a' );
    // const text = el.getElementsByTagName('b')
    // // console.log(links)
    
    return (
        
        <div className="recipeDetailBody">
            
            <h1>{name}</h1>
            <img src={image}></img>
            <h2>{diets}</h2>
            <h3>Plate Resume: {resume.outerText}</h3>
            
            
            <h3>Step to Step{step.outerText}</h3>

            <h2>Punctuation</h2>
            <meter min="0" max="100"
                low="25" high="75"
            optimum="100" value={punctuation}></meter>

            <h2>healty_level</h2>
            <meter min="0" max="100"
                low="25" high="75"
            optimum="100" value={healty_level}></meter>
            
        </div>
    );
  }
  
  export default RecipeDetailBody;