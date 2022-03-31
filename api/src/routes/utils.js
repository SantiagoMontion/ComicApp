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
    //console.log(apiResponse)
    return {
        name: apiResponse.data.title,

        image: apiResponse.data.image,

        diets: apiResponse.data.diets,

        plate_resume: apiResponse.data.summary,

        punctuation: apiResponse.data.spoonacularScore,

        steps: apiResponse.data.instructions,

        healty_level: apiResponse.data.healthScore,

    }

};


normalizeApiList = (apiResponse) =>{
    return{
        results: apiResponse.data.results,
    }
}


//Funcion para Normalizar los datos de Types de la DB
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
           
    if(finalArray.length){
        return{
            results:finalArray,
        }

    }
    else{
        let normalizearray=[]
        let finalArray=[]
        for(let i=0;i<Typesarr.length;i++){
            normalizearray.push(Typesarr[i].dataValues)
        }
        for (let i=0;i<normalizearray.length;i++){
            finalArray.push(normalizearray[i].name)
        }
        return{results:finalArray}
    }
}


module.exports = {normalizeDb,normalizeApi,normalizeApiList,normalizeTypes};