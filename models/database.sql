CREATE DATABASE SAFRAN_PROJECT;


CREATE TABLE users (
    id serial PRIMARY KEY,
    email VARCHAR( 255 ) UNIQUE NOT NULL,
    password VARCHAR( 50 ) NOT NULL,
    created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP
);


CREATE TABLE jours (
        id serial PRIMARY KEY,
        mois VARCHAR(20),
        nbJours NUMBER,
);

CREATE TABLE article (
                id serial PRIMARY KEY,
                Article VARCHAR(50),
        	Code_Porteur VARCHAR(50),
        	Programme VARCHAR(50),
                Perimetre_de_Production VARCHAR(50),
                Ligne_de_Production VARCHAR(50),
                PDP_MRP  VARCHAR(50),
                Achet_Plan VARCHAR(50),
                Gestionnaire_Client VARCHAR(50),
                Superieur_Production VARCHAR(50),
                Dern_Op_Kitting	 VARCHAR(50),
                Dern_Op_Prod VARCHAR(50),
                Dern_Op_Test VARCHAR(50),
                Dern_Op_Ctrl VARCHAR(50),
                TG_Unit_kitting VARCHAR(50),
                TG_Unit_Prod VARCHAR(50),
                TG_Unit_Test VARCHAR(50),
                TG_Unit_Controle VARCHAR(50),
                Kitting	 VARCHAR(50),
                Production VARCHAR(50),
                Test VARCHAR(50),
                Controle VARCHAR(50),
                Attente_Amont_Aval_Kitting VARCHAR(50),
                Attente_Amont_Aval_Production VARCHAR(50),
                Attente_Amont_Aval_Test VARCHAR(50),
                Attente_Amont_Aval_Controle VARCHAR(50),
                amont_Kitting_h  VARCHAR(50),
                aval_Kitting_h	 VARCHAR(50),
                amont_Production VARCHAR(50),
                Aval_Production VARCHAR(50),
                Amon_Test VARCHAR(50),
                Aval_Test VARCHAR(50),
                Amont_Controle 	VARCHAR(50),
                Aval_Controle  VARCHAR(50),
                Net_VA VARCHAR(50),
                Brut_VA VARCHAR(50)
);

CREATE TABLE tableau162(
Code_article VARCHAR(100),
Site VARCHAR(100),
Ordre_fabrication VARCHAR(100),
ID VARCHAR(100),
Qt_ouv VARCHAR(100),
Date_dchance VARCHAR(100),
Liaison VARCHAR(100),
St VARCHAR(100),
AchetPlanif VARCHAR(100),
Fam_usinage VARCHAR(100),
Date_de_lancement REAL,
Remarque VARCHAR(100),
Code_gamme VARCHAR(100),
Code_nomenform VARCHAR(100),
Type VARCHAR(100),
Quantit_commande VARCHAR(100),
Heure_PDF VARCHAR(100),
Projet VARCHAR(100),
Ligne_prod VARCHAR(100),
Code_Porteur VARCHAR(100),
Ordre_de_fabrication_clos_par VARCHAR(100)
);


Create table tabarticle162(
        Code_article VARCHAR(100),
        Ordre_fabrication VARCHAR(100),
        Qt_ouv VARCHAR(100),
        Date_de_lancement VARCHAR(100),
        Programme VARCHAR(50),
        Perimetre_de_Production VARCHAR(50),
        Ligne_de_Production VARCHAR(50),
        Gestionnaire_Client VARCHAR(50),
        Superieur_Production VARCHAR(50)
);

create table jourF(
        id serial PRIMARY KEY,
        date VARCHAR(50),
        description varchar(50),
        type varchar(50)
);

CREATE table User(
        if serial PRIMARY KEY,
        email VARCHAR(50),
        mdp VARCHAR(50),
        role Varchar(50)
)