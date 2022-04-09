//Funcion utilizada para normalizar la info de la DB
//Retornando un objeto con las propiedades que necesito
normalizeDb = (recipe_db)=>{
    let dietsArray= []

    for (let i=0; i<recipe_db.length;i++){
        recipe_db[i].dataValues.types?.map((d)=>{
            
            dietsArray.push(d.dataValues.name)
        })
        return{
            id: recipe_db[i].dataValues.id,
            
            title: recipe_db[i].dataValues.title,
    
            summary: recipe_db[i].dataValues.summary,
    
            spoonacularScore: recipe_db[i].dataValues.spoonacularScore,
    
            healthScore: recipe_db[i].dataValues.healthScore,
    
            steps: recipe_db[i].dataValues.steps,
    
            diets: dietsArray,

            image: recipe_db[i].dataValues.image
            
        }

    }
};


normalizeDbCreated = (Dbdata) =>{
    let dietsArray=[]
    
    Dbdata.dataValues.types?.map((d)=>{
            
        dietsArray.push(d.dataValues.name)
    })
    
    return{
        id: Dbdata.dataValues.id,

        title: Dbdata.dataValues.title,
    
        summary: Dbdata.dataValues.summary,
    
        spoonacularScore: Dbdata.dataValues.spoonacularScore,
    
        healthScore: Dbdata.dataValues.healthScore,
    
        steps: Dbdata.dataValues.steps,
    
        diets: dietsArray,

        image: Dbdata.dataValues.image,
            
    }
};


//Funcion utilizada para normalizar los datos desde la API

normalizeApi = (apiResponse)=>{
    console.log(apiResponse)
    return {
        title: apiResponse.data.title,

        image: apiResponse.data.image,

        diets: apiResponse.data.diets,

        summary: apiResponse.data.summary,

        spoonacularScore: apiResponse.data.spoonacularScore,

        steps: apiResponse.data.instructions,

        healthScore: apiResponse.data.healthScore,

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


module.exports = {normalizeDb,normalizeApi,normalizeApiList,normalizeTypes,normalizeDbCreated};