



function RecipeDetailBody({recipe}) {
    const {name , plate_resume,image,diets,punctuation,healty_level,steps} = recipe;
    console.log(recipe)
    // var el = document.createElement( 'html' );
    // el.innerHTML = plate_resume;

    // const links = el.getElementsByTagName( 'a' );
    // const text = el.getElementsByTagName('b')
    // // console.log(links)
    
    return (
        
        <div className="recipeDetailBody">
            
            <h1>{name}</h1>
            <img src={image}></img>
            <h2>{diets}</h2>
            <h3>Plate Resume: {plate_resume}</h3>
            <h2>{punctuation}</h2>
            <h3>{healty_level}</h3>
            <h3>Step to Step{steps}</h3>
            
        </div>
    );
  }
  
  export default RecipeDetailBody;