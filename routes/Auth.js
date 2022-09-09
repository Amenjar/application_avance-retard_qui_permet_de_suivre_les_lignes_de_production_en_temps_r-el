const express = require("express"); // on importe express.js

const auth = express();
const pool = require("../config/db");
const bodyParser = require("body-parser");

auth.use(bodyParser.json());
auth.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

auth.use((req, res, next) => {
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

//SIGNIN

auth.post("/user/signin", async (req, res) => {
  const { email, mdp ,role } = req.body;
  const recherche = await pool.query(
    "SELECT * from users where email = $1",
    [email],
    async (error, result) => {
      if (result.rows.length > 0) {
        res.json({
          message: "l'email existe déja",
        });
      } else {
        const response = await pool.query(
          "INSERT INTO users(email,mdp,role) VALUES ($1,$2,$3) RETURNING *",
          [email, mdp, role],
          (error, result) => {
            if(error){
              throw error
            }
            else{
            res.json({
              email: result.rows[0].email,
              mdp: result.rows[0].mdp,
              role: result.rows[0].role
            });
          }
          }
        );
      }
    }
  );
});

auth.post("/user/login", async (req, res) => {
  const { email, mdp } = req.body;
  const response = await pool.query(
    "select * from users where email=$1 and mdp=$2 ",
    [email, mdp],
    (error, result) => {
      if (result) {
        if (result.rows.length > 0) {
          res.json({
            id: result.rows[0].id,
            email: result.rows[0].email,
            mdp: result.rows[0].mdp,
            role: result.rows[0].role
          });
        } 
      }
      if (error) {
        throw error;
      }
    }
  );
});

module.exports = auth;
