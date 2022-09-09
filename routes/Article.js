const express = require("express"); // on importe express.js

const article = express();
const pool = require("../config/db");
const bodyParser = require("body-parser");

article.use(bodyParser.json());
article.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
article.use((req, res, next) => {
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
article.post("/article/create", async (req, res) => {
  const {
    Article,
    Code_Porteur,
    Programme,
    Perimetre_de_Production,
    Ligne_de_Production,
    PDP_MRP,
    Achet_Plan,
    Gestionnaire_Client,
    Superieur_Production,
    Dern_Op_Kitting,
    Dern_Op_Prod,
    Dern_Op_Test,
    Dern_Op_Ctrl,
    TG_Unit_kitting,
    TG_Unit_Prod,
    TG_Unit_Test,
    TG_Unit_Controle,
    Kitting,
    Production,
    Test,
    Controle,
    Attente_Amont_Aval_Kitting,
    Attente_Amont_Aval_Production,
    Attente_Amont_Aval_Test,
    Attente_Amont_Aval_Controle,
    amont_Kitting_h,
    aval_Kitting_h,
    amont_Production,
    Aval_Production,
    Amon_Test,
    Aval_Test,
    Amont_Controle,
    Aval_Controle,
    Net_VA,
    Brut_VA,
  } = req.body;

  const response = await pool.query(
    "INSERT INTO ARTICLE(Article ,Code_Porteur,Programme,Perimetre_de_Production,Ligne_de_Production,PDP_MRP,Achet_Plan ,Gestionnaire_Client ,Superieur_Production ,Dern_Op_Kitting,Dern_Op_Prod ,Dern_Op_Test ,Dern_Op_Ctrl ,TG_Unit_kitting ,TG_Unit_Prod ,TG_Unit_Test ,TG_Unit_Controle ,Kitting,Production ,Test ,Controle , Attente_Amont_Aval_Kitting ,Attente_Amont_Aval_Production ,Attente_Amont_Aval_Test ,Attente_Amont_Aval_Controle,amont_Kitting_h,aval_Kitting_h,amont_Production ,Aval_Production ,Amon_Test,Aval_Test,Amont_Controle,Aval_Controle,Net_VA ,Brut_VA) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35) RETURNING *",
    [
      Article,
      Code_Porteur,
      Programme,
      Perimetre_de_Production,
      Ligne_de_Production,
      PDP_MRP,
      Achet_Plan,
      Gestionnaire_Client,
      Superieur_Production,
      Dern_Op_Kitting,
      Dern_Op_Prod,
      Dern_Op_Test,
      Dern_Op_Ctrl,
      TG_Unit_kitting,
      TG_Unit_Prod,
      TG_Unit_Test,
      TG_Unit_Controle,
      Kitting,
      Production,
      Test,
      Controle,
      Attente_Amont_Aval_Kitting,
      Attente_Amont_Aval_Production,
      Attente_Amont_Aval_Test,
      Attente_Amont_Aval_Controle,
      amont_Kitting_h,
      aval_Kitting_h,
      amont_Production,
      Aval_Production,
      Amon_Test,
      Aval_Test,
      Amont_Controle,
      Aval_Controle,
      Net_VA,
      Brut_VA,
    ],
    (error, result) => {
      if (result) {
        res.json(result);
      }
      if (error) {
        throw error;
      }
    }
  );
});

article.get("/article/", async (req, res) => {
  const recherche = await pool.query(
    "SELECT * from article",
    async (error, result) => {
      if (error) {
        res.json(error);
      }
      res.json(result.rows);
    }
  );
});

article.delete("/article/:articleID", async (req, res) => {
  const id = await parseInt(req.params.articleID);
  const requete = await pool.query(
    "DELETE from article where id=$1",
    [id],
    async (error, result) => {
      if (error) {
        res.json(error);
        console.log(id);
      }
      console.log(id);
      res.json(result);
    }
  );
});

article.put("/article/:articleID", async (req, res) => {
  const id = await parseInt(req.params.articleID);
  const {
    Article,
    Code_Porteur,
    Programme,
    Perimetre_de_Production,
    Ligne_de_Production,
    PDP_MRP,
    Achet_Plan,
    Gestionnaire_Client,
    Superieur_Production,
    Dern_Op_Kitting,
    Dern_Op_Prod,
    Dern_Op_Test,
    Dern_Op_Ctrl,
    TG_Unit_kitting,
    TG_Unit_Prod,
    TG_Unit_Test,
    TG_Unit_Controle,
    Kitting,
    Production,
    Test,
    Controle,
    Attente_Amont_Aval_Kitting,
    Attente_Amont_Aval_Production,
    Attente_Amont_Aval_Test,
    Attente_Amont_Aval_Controle,
    amont_Kitting_h,
    aval_Kitting_h,
    amont_Production,
    Aval_Production,
    Amon_Test,
    Aval_Test,
    Amont_Controle,
    Aval_Controle,
    Net_VA,
    Brut_VA,
  } = req.body;

  const requete = pool.query(
    "UPDATE article SET Article = $1,Code_Porteur = $2,Programme=$3,Perimetre_de_Production=$4,Ligne_de_Production=$5,PDP_MRP=$6,Achet_Plan=$7,Gestionnaire_Client=$8,Superieur_Production=$9,Dern_Op_Kitting=$10,Dern_Op_Prod=$11,Dern_Op_Test=$12,Dern_Op_Ctrl=$13,TG_Unit_kitting=$14,TG_Unit_Prod=$15,TG_Unit_Test=$16,TG_Unit_Controle=$17,Kitting=$18,Production=$19,Test=$20,Controle=$21, Attente_Amont_Aval_Kitting=$22,Attente_Amont_Aval_Production=$23,Attente_Amont_Aval_Test=$24,Attente_Amont_Aval_Controle=$25,amont_Kitting_h=$26,aval_Kitting_h=$27,amont_Production=$28,Aval_Production=$29,Amon_Test=$30,Aval_Test=$31,Amont_Controle=$32,Aval_Controle=$33,Net_VA=$34,Brut_VA=$35 where id = $36",
    [
      Article,
      Code_Porteur,
      Programme,
      Perimetre_de_Production,
      Ligne_de_Production,
      PDP_MRP,
      Achet_Plan,
      Gestionnaire_Client,
      Superieur_Production,
      Dern_Op_Kitting,
      Dern_Op_Prod,
      Dern_Op_Test,
      Dern_Op_Ctrl,
      TG_Unit_kitting,
      TG_Unit_Prod,
      TG_Unit_Test,
      TG_Unit_Controle,
      Kitting,
      Production,
      Test,
      Controle,
      Attente_Amont_Aval_Kitting,
      Attente_Amont_Aval_Production,
      Attente_Amont_Aval_Test,
      Attente_Amont_Aval_Controle,
      amont_Kitting_h,
      aval_Kitting_h,
      amont_Production,
      Aval_Production,
      Amon_Test,
      Aval_Test,
      Amont_Controle,
      Aval_Controle,
      Net_VA,
      Brut_VA,
      id,
    ],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json("modifié avec succée");
      }
    }
  );
});

module.exports = article;
