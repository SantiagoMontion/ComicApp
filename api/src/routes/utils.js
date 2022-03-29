//Funcion utilizada para normalizar la info de la DB
//Retornando un objeto con las propiedades que necesito
normalizeDb = (recipe_db_name)=>{
    
    return {
        name: recipe_db_name.name,

        plate_resume: recipe_db_name.plate_resume,

        punctuation: recipe_db_name.punctuation,

        healty_level: recipe_db_name.healty_level,

        steps: recipe_db_name.steps,
      };
};


//Funcion utilizada para normalizar los datos desde la API

normalizeApi = (apiResponse)=>{
   
    return {
        name: apiResponse.data.title,

        plate_resume: apiResponse.data.summary,

        punctuation: apiResponse.data.spoonacularScore,

        healty_level: apiResponse.data.healthScore,

        steps: apiResponse.data.instructions,
    }

};


normalizeApiList = (apiResponse) =>{
    return{
        results: apiResponse.data.results,
    }
}


normalizeTypes = (Typesarr) =>{
    
    let normalizearray=[]
    let finalArray=[]
    for(let i=0;i<Typesarr.length;i++){
        for(let j=0; j<Typesarr[i].length; j++){
            normalizearray.push(Typesarr[i][j].dataValues)  
        }
    }
    
    for (let i=0;i<normalizearray.length;i+=2){
        finalArray.push(normalizearray[i].name)
    }
           
    
    return{
        results:finalArray,
    }
}


module.exports = {normalizeDb,normalizeApi,normalizeApiList,normalizeTypes};