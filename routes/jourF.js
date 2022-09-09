const express = require("express"); // on importe express.js

const jourF = express();
const pool = require("../config/db");
const bodyParser = require("body-parser");

jourF.use(bodyParser.json());
jourF.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

jourF.use((req, res, next) => {
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

jourF.post("/ajouter", async (req, res) => {
  const date = req.body.date;
  const description = req.body.description;
  const type = req.body.type;
  requete = pool.query(
    "INSERT INTO jourF(date,description,type) values($1,$2,$3);",
    [date, description, type],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json("Ajouté avec succée");
      }
    }
  );
});

jourF.get("/", async (req, res) => {
  requete = pool.query("SELECT * FROM jourF", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result.rows);
    }
  });
});

jourF.put("/:id", async (req, res) => {
  const id = req.params.id;
  const date = req.body.date;
  const description = req.body.description;
  const type = req.body.type;
  requete = pool.query(
    "UPDATE jourF SET date = $1, description = $2, type = $3 WHERE id=$4",
    [date, description, type, id],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json("modifié avec succée");
      }
    }
  );
});

jourF.delete("/:id", async (req, res) => {
  const id = req.params.id;
  requete = pool.query("delete from jourF where id=$1", [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json("supprimé avec succée");
    }
  });
});

module.exports = jourF;
