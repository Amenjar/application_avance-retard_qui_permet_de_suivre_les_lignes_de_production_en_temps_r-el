const express = require("express"); // on importe express.js

const controle = express();
const pool = require("../config/db");
const bodyParser = require("body-parser");
const { CopyResponse } = require("pg-protocol/dist/messages");
const { reset } = require("nodemon");

controle.use(bodyParser.json());
controle.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

controle.use((req, res, next) => {
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
controle.get("/controle/planif",(req,res,next)=>{
    pool.query("DROP TABLE IF EXISTS controlev2;CREATE TABLE controlev2(ordre_fab varchar(50),k_planifié varchar(50),p_planifié varchar(50),t_planifié varchar(50),c_planifié varchar(50));DROP table if exists controlev1;CREATE TABLE controlev1 AS SELECT distinct(mq2706v2.ordre_fabrication),article.article,mq2706v2.date_de_lancement,article.tg_unit_kitting,article.tg_unit_prod,article.tg_unit_test,article.tg_unit_controle from article INNER JOIN mq2706v2 ON article.article=mq2706v2.code_article ;",(err,result)=>{
        if(err){
            throw err
        }
        else{
            pool.query("SELECT DISTINCT * FROM controlev1",(error,result)=>{
                if(error){
                    throw(error)
                }
                else{
                    for(let resultat of result.rows){
                       const date_de_lancement=resultat.date_de_lancement.toString()
                       const k_lancement=new Date(date_de_lancement.slice(6,10)+"-"+date_de_lancement.slice(0,2)+"-"+date_de_lancement.slice(3,5));
                       let k_fin = new Date(new Date(k_lancement).getTime() + 60  * 60 *  resultat.tg_unit_kitting * 1000)
                       let p_fin = new Date(new Date(k_lancement).getTime() + 60  * 60 *  resultat.tg_unit_prod * 1000)
                       let t_fin = new Date(new Date(k_lancement).getTime() + 60  * 60 *  resultat.tg_unit_test * 1000)
                       let c_fin = new Date(new Date(k_lancement).getTime() + 60  * 60 *  resultat.tg_unit_controle * 1000)
            
                       pool.query("SELECT * from jourf;",(e,r)=>{
                        if(e){
                            throw e
                        }
                        else{
                        
                            //res.json(r);
                            for(let re of r.rows){
    
                                let jour_f=new Date(re.date.slice(6,10)+"-"+re.date.slice(3,5)+"-"+re.date.slice(0,2));
                                if(jour_f>=k_lancement && jour_f<=k_fin){
                                    k_fin = new Date(k_fin.getTime()+ 60 * 60 *24 *1000);
                                }
                                 k_finStr = k_fin.toISOString().slice(0, 10);
                                if(jour_f>=k_lancement && jour_f<=p_fin){
                                    p_fin = new Date(p_fin.getTime()+ 60 * 60 *24 *1000);
                                   }
                                 p_finStr = p_fin.toISOString().slice(0, 10);
                                if(jour_f>=k_lancement && jour_f<=t_fin){
                                        t_fin = new Date(t_fin.getTime()+ 60 * 60 *24 *1000);}
                                  t_finStr = t_fin.toISOString().slice(0, 10);
                                if(jour_f>=k_lancement && jour_f<=c_fin){
                                            c_fin = new Date(c_fin.getTime()+ 60 * 60 *24 *1000);
                                           }
                                 c_finStr = c_fin.toISOString().slice(0, 10);
                                
                               
                         
                            }
                            pool.query("INSERT INTO controlev2( ordre_fab, k_planifié, p_planifié, t_planifié, c_planifié) VALUES($1,$2,$3,$4,$5)",[resultat.ordre_fabrication,k_finStr,p_finStr,t_finStr,c_finStr],(er,resu)=>{
                                if(er){
                                    throw er
                                }
                               else{
                               
                               }

                               })
                    
                        }
                       })
                    }
                    
                }

            })

           
            res.json("done")
        }
    })
})

controle.get('/controle/reel',(req,res)=>{
    classeur = require('../uploads/classeur1.json');
    let classeurv1=[] 
    for(let c of classeur){
        if(c.QTE_OP_PRODUIT==1){
            classeurv1.push(c);
        }
        
    }
  
    console.log(classeurv1.length)
    pool.query("DROP TABLE IF EXISTS controlev3;CREATE TABLE controlev3(ordre_fab varchar(50),k_reel varchar(50),p_reel varchar(50),t_reel varchar(50),c_reel varchar(50));select * from mq2706v2 ",(error,result)=>{
        if(error){
            throw error
        }
        else{
            for(let c of classeurv1){
            const dern= c.OPERATION.toString()+c.C_CHARGE
            for(let res of result[2].rows){
            
                    if(res.ordre_fabrication == c.NO_OF ){
                        
                        pool.query("select * from article where article.article=$1",[res.code_article],(err,resu)=>{
                            if(err){
                                throw err
                            }
                            
                            else{
                               
                                let k_dern=""
                                console.log(resu.rows)
                                if(dern==resu.rows[0].dern_op_kitting){
                                  k_dern=c.DATE.slice(6,10)+"-"+c.DATE.slice(0,2)+"-"+c.DATE.slice(3,5);
                                  console.log('k_dern :'+k_dern)
                                  let k_dern_s = k_dern;
                                  let p_dern=""
                                  if(dern==resu.rows[0].dern_op_prod){
                                    p_dern=c.DATE.slice(6,10)+"-"+c.DATE.slice(0,2)+"-"+c.DATE.slice(3,5);
                                    console.log('p_dern :'+p_dern)
                                    let p_dern_s = p_dern
                                let t_dern=""
                                if(dern==resu.rows[0].dern_op_test){
                                  t_dern=c.DATE.slice(6,10)+"-"+c.DATE.slice(0,2)+"-"+c.DATE.slice(3,5);
                                  console.log('t_dern :'+t_dern)
                                  let t_dern_s = t_dern
                                  let c_dern=""
                                  if(dern==resu.rows[0].dern_op_ctrl){
                                    c_dern=c.DATE.slice(6,10)+"-"+c.DATE.slice(0,2)+"-"+c.DATE.slice(3,5);
                                    let c_dern_s = c_dern
                                    console.log('c_dern :'+c_dern)
                                    pool.query("INSERT INTO controlev3( ordre_fab, k_reel, p_reel, t_reel, c_reel) VALUES($1,$2,$3,$4,$5);",[c.NO_OF,k_dern_s,p_dern_s,t_dern_s,c_dern_s],(e,r)=>{
                                        if(e){
                                            throw e
                                        }
                                   
                                    })
                                  }
                                  
                                }
                                  }
                                }
                               
                               
                               
                               
                            }
                        })
                    }
                  
                
            }
        }
       }
       res.json("end")
    
    })
})


controle.get('/controle/etat',(req,res)=>{
    pool.query('DROP TABLE IF EXISTS controlev5;CREATE TABLE controlev5(ordre_fab varchar(50),k_etat varchar(50),p_etat varchar(50),t_etat varchar(50),c_etat varchar(50));DROP TABLE IF EXISTS controlev4;CREATE TABLE controlev4 as SELECT controlev2.ordre_fab,controlev2.k_planifié,controlev2.p_planifié,controlev2.t_planifié,controlev2.c_planifié,controlev3.k_reel,controlev3.p_reel,controlev3.t_reel,controlev3.c_reel FROM controlev2 INNER JOIN controlev3 ON controlev2.ordre_fab=controlev3.ordre_fab;SELECT * FROM controlev4',(error,result)=>{
        if(error){
            throw error
        }
        else{
           for(let r of result[4].rows){
            k_planifié=new Date(r.k_planifié)
            p_planifié=new Date(r.p_planifié)
            t_planifié=new Date(r.t_planifié)
            c_planifié=new Date(r.c_planifié)
            k_reel = new Date(r.k_reel)
            p_reel = new Date(r.p_reel)
            t_reel = new Date(r.t_reel)
            c_reel = new Date(r.c_reel)
            
            const diffk = k_reel - k_planifié;
            const k_etat = Math.ceil(diffk / (1000 * 60 * 60 * 24));
            const diffp = p_reel - p_planifié
            const p_etat = Math.ceil(diffp / (1000 * 60 * 60 * 24));
            const difft = t_reel - t_planifié
            const t_etat = Math.ceil(difft / (1000 * 60 * 60 * 24));
            const diffc = c_reel - c_planifié
            const c_etat = Math.ceil(diffc / (1000 * 60 * 60 * 24)); 
            pool.query("INSERT INTO controlev5(ordre_fab,k_etat ,p_etat,t_etat,c_etat) VALUES($1,$2,$3,$4,$5);",[r.ordre_fab,k_etat,p_etat,t_etat,c_etat],(err,resu)=>{
                if(err){
                    throw err
                }
            })
           }
           res.json("end")
        }
    })
})







module.exports=controle