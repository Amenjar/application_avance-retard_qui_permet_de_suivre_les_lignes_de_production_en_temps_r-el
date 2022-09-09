const express = require("express"); // on importe express.js

const router = express();
const pool = require("../config/db");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use((req, res, next) => {
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

/////////////////////////////////////////////////////////RAFRAICHIR LA TABLE mq2706v1////////////////////////////////////////////////
router.post("/mq2706v1", async (req, res) => {
  requete = pool.query(
    "DROP TABLE IF EXISTS mq2706v1;CREATE TABLE mq2706v1 AS SELECT DISTINCT mq2706.ordre_fab, mq2706.composant, mq2706.qt_ouv, sep_manquants.delai FROM mq2706 INNER JOIN sep_manquants ON mq2706.composant = sep_manquants.composant;",
    (Error, result) => {
      if (Error) {
        throw Error;
      } else {
        res.json(result.rows);
        console.log("hello");
      }
    }
  );
});
/////////////////////////////////////////////////////////RAFRAICHIR LA TABLE mq2706v2//////////////////////////////////////////////
router.post("/mq2706v2", async (req, res) => {
  requete = pool.query(
    "DROP TABLE IF EXISTS mq2706v2 ;CREATE TABLE mq2706v2 AS SELECT DISTINCT * FROM mq2706v1 RIGHT JOIN tabarticle162 ON mq2706v1.ordre_fab=tabarticle162.ordre_fabrication",
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json(result.rows);
      }
    }
  );
});
///////////////////////////////////////////////////////////GET la table mq2706v2/////////////////////////////////////////////////////
router.get("/mq2706v2", async (req, res) => {
  requete = pool.query("SELECT DISTINCT * FROM mq2706v2 LEFT JOIN controlev2 ON mq2706v2.ordre_fabrication=controlev2.ordre_fab LEFT JOIN controlev3 ON mq2706v2.ordre_fabrication=controlev3.ordre_fab LEFT JOIN controlev5 ON mq2706v2.ordre_fabrication=controlev5.ordre_fab;", (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result.rows);
    }
  });
});

module.exports = router;
