const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, Type } = require("../db");
const axios = require("axios");

const { route } = require("express/lib/application");
const router = Router();

const url = "http://comicvine.gamespot.com/api";
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/comics", async (req, res) => {
  try {
    const apiCallResp = await axios.get(
      `${url}/issues/?api_key=984a97c2d52395df5cbc7173b9ab9d59a49eb887&sort=cover_date:desc&format=json`
    );

    return res.status(200).send(apiCallResp.data.results);
  } catch (error) {
    res.status(404).json({ msg: "Comics error. " + error });
  }
});

router.get("/comics/:id", async (req, res) => {
  const { id } = req.params;
  try {
    //get Comic info
    const apiCallResp = await axios.get(
      `${url}/issues/?api_key=984a97c2d52395df5cbc7173b9ab9d59a49eb887&filter=id:${id}&format=json`
    );

    const apiCallDetail = await axios.get(
      `${apiCallResp.data.results[0].api_detail_url}?api_key=984a97c2d52395df5cbc7173b9ab9d59a49eb887&format=json`
    );
    
    return res.send(apiCallDetail.data.results);
  } catch (error) {
    res.status(400).send("Comic Id not found " + error);
  }
});

router.get("/search", async (req, res) => {
  const { search } = req.query;
  const lower_name = search.trim();
  if (search) {
    try {
      //get Comic info
      const apiCallResp = await axios.get(
        `${url}/search/?api_key=984a97c2d52395df5cbc7173b9ab9d59a49eb887&query=${lower_name}&format=json`
      );

      return res.send(apiCallResp.data.results);
    } catch (error) {
      res.status(400).json("Comic Id not found " + error);
    }
  } else {
    res.status(400).json("Comic Id not found ");
  }
});


router.get("/comic/data/",async (req, res) => {
  const { url } = req.query;
  try {
    const apiCallResp = await axios.get(
      `${url}?api_key=984a97c2d52395df5cbc7173b9ab9d59a49eb887&format=json`
    );

    return res.send(apiCallResp.data.results);
  } catch (error) {
    res.status(400).json("Comic DATA not found " + error);
  }
})
module.exports = router;
