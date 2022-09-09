const express = require("express"); // on importe express.js
const excel = express();
const pool = require("../config/db");
const bodyParser = require("body-parser");
const reader = require("xlsx");
const fs = require("fs");

excel.use(bodyParser.json());
excel.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

excel.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

const multer = require("multer");
const { stringify } = require("querystring");
const uploads = multer({ dest: "../uploads" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.MimeType === "Image/xlsx" || file.MimeType === "Image.xls") {
    cb(null, false);
  } else cb(null, true);
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

////////////////////////////////////////////////////////////rafraichir la page apres l'ajout d'un article//////////////////////////////////////////////////////////////////////////////
excel.get("/rafraichir/", async (req, res) => {
  pool.query(
    "DROP TABLE IF EXISTS tabarticle162; CREATE TABLE tabarticle162 AS SELECT DISTINCT tableau162.code_article,tableau162.ordre_fabrication,tableau162.qté_ouv,tableau162.date_de_lancement,article.Programme ,article.Perimetre_de_Production ,article.Ligne_de_Production,article.Gestionnaire_Client ,article.Superieur_Production FROM article inner join tableau162 ON article.article=tableau162.code_article",
    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log('rafraichit avec succées!')
        res.json("rafraichit avec succées!");
      }
    }
  );
});
/////////////////////////////////////////////////////////GET tableau formé de 16.2 et le tableau des articles////////////////////////////////////////////////////////
excel.get("/tabarticle162", async (req, res) => {
  pool.query("SELECT DISTINCT * FROM tabarticle162", (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result.rows);
    }
  });
});

////////////////////////////////////////////////////////////C////////////////////////////////////////////////////

excel.get("/xls", async (req, res) => {
  const tab162 = require("../uploads/tableau162v2.json");
  const articlesjsonFile = require("../uploads/articles.json");
  pool.query('DROP TABLE IF EXISTS tableau162;CREATE TABLE tableau162(code_article varchar(255), ordre_fabrication varchar(255), qté_ouv varchar(255), date_de_lancement varchar(255));',(error,result)=>{
    if(error){
      throw error;
    }
    else{
      for (let obj of tab162) {
        pool.query(
          "INSERT INTO tableau162(code_article, ordre_fabrication, qté_ouv, date_de_lancement)VALUES ($1, $2, $3, $4);",
          [
            obj.Code_article,
            obj.Ordre_fabrication,
            obj.qté_ouv,
            obj.Date_de_lancement,
          ],
          (error, result) => {
            if (error) {
              throw error;
            }
          }
        );
      }
    }
  })
 
});

module.exports = excel;
