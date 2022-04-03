const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, Type } = require("../db");
const axios = require("axios");
const {normalizeDb,normalizeApi,normalizeApiList,normalizeTypes} = require('./utils.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', async(req,res)=>{
    const {name} = req.query;
    try{
        //BUSCAMOS DENTRO DE NUESTRA BASE DE DATOS.
        if (name){
            const lower_name = name.trim().toLowerCase();  //En minusculas, porque asi esta guardado en db
            const recipe_db_name = await Recipe.findOne({
                WHERE: {name: lower_name},
                include: Type,
            });

            if (recipe_db_name){
                return res.json(normalizeDb(recipe_db_name))
            }
            else{
                //EN CASO DE NO ENCONTRARLA BUSCAMOS EN LA API
                const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=4db018138def4598983fb6b61c5802ba`);
                return res.json(normalizeApiList(apiResponse)) 
            }
        }
        else{    //EN CASO DE NO EXISTIR EL QUERY PARAM 
            //Llamamos a la Api
            const apiCallResp = await axios.get("https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=6&apiKey=4db018138def4598983fb6b61c5802ba");
            
            var array = normalizeApiList(apiCallResp).results;
            //Llamamos a la DB
            const dataDB = await Recipe.findAll({
                 include: {
                   model: Type,
                   attributes: ["name"],
                   through: { attributes: [] },
                },
    
               });
          
            //   //Concatenamos las recipes de DB y API
            const totalrecipes = array.concat(normalizeDb(dataDB));
            return res.json(totalrecipes);
        
          
        }
    }
    catch(error){
        res.status(404).json({ msg: "Recipe not found. " + error });
    }
})


router.get('/recipes/:idReceta',async(req, res)=>{
    const {idReceta} = req.params;
    try{
        const recipe_by_id = await Recipe.findByPk(idReceta,{include: Type})

        if (!recipe_by_id){
            res.status(400).json("ERROR Recipe id not found " + error)
        }
        return res.json(normalizeDb(recipe_by_id))

    }
    catch{
        try{
            const apiCall = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?&apiKey=4db018138def4598983fb6b61c5802ba`)
            return res.json(normalizeApi(apiCall))
        }   
        catch(error){
            res.status(400).json("Recipe Id not found " + error)
        }
    }
})  


router.get('/types',async(req,res)=>{//FALTA TOMAR DATOS DE LA API Y AGREGARLAS Y CONCATENARLAS
    try{

        const apiCallResp = await axios.get("https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=4db018138def4598983fb6b61c5802ba");
            
        var arrayApi = normalizeApiList(apiCallResp).results;
        var allApidiets = []
        arrayApi.map((t)=>{
            
            if(t.diets){
                t.diets.map((d)=>{
                    allApidiets.push(d);
                })
            }
        })
        
        
        var array =["gluten free","ketogenic","vegetarian","lacto-vegetarian","ovo-vegetarian","vegan","pescetarian","paleo","primal","low FODMAP","whole30"]
        concated = array.concat(allApidiets)

        var arrayDbAndApi= [...new Set(concated)]
        var allTypes=[]
            
        for(var i=0;i<arrayDbAndApi.length;i++){
            allTypes.push(await Type.findOrCreate({
                where: {name: arrayDbAndApi[i]},
                    
            }));
        }
            
            
        res.status(200).json(normalizeTypes(allTypes).results)
        
    }
      catch(error){
         res.status(400).json("Error to create types: " + error)
      }
})


router.post('/recipe',async(req,res)=>{
    try{
    let {name, plate_resume, punctuation, healty_level, steps} = req.body;
    if (!name || !plate_resume)return res.status(400).send('Error, missing necessary parameters');

    if(!punctuation) punctuation=1;
    if(!healty_level) healty_level=1;
    if(!steps) steps="unknown";
    
    const lower_name = name.trim().toLowerCase();  //En minusculas, porque asi esta guardado en db


    const createdRecipe = await Recipe.create({
        name: lower_name,
        plate_resume,
        punctuation,
        healty_level,
        steps,
    })

    const newRecipe = await Recipe.findOne({
        where: { name: lower_name },
        include: Type,
    });
    const newRecipeNormalized = normalizeDb(newRecipe);
    return res.json(newRecipeNormalized);

    }
    catch(error){
        return res.status(404).json("Error, " + error);
    }
})
module.exports = router;
