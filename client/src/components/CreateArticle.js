import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addArticle } from "../redux/actions/articleaction";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function CreateArticle() {
  const dispatch = useDispatch();
  const [Article, setArticle] = useState("");
  const [Code_Porteur, setCode_Porteur] = useState("");
  const [Programme, setProgramme] = useState("");
  const [Ligne_de_Production, setLigne_de_Production] = useState("");
  const [PDP_MRP, setPDP_MRP] = useState("");
  const [Achet_Plan, setAchet_Plan] = useState("");
  const [Gestionnaire_Client, setGestionnaire_Client] = useState("");
  const [Superieur_Production, setSuperieur_Production] = useState("");
  const [Dern_Op_Kitting, setDern_Op_Kitting] = useState("");
  const [Dern_Op_Prod, setDern_Op_Prod] = useState("");
  const [Dern_Op_Test, setDern_Op_Test] = useState("");
  const [Dern_Op_Ctrl, setDern_Op_Ctrl] = useState("");
  const [TG_Unit_kitting, setTG_Unit_kitting] = useState("");
  const [TG_Unit_Prod, setTG_Unit_Prod] = useState("");
  const [TG_Unit_Test, setTG_Unit_Test] = useState("");
  const [TG_Unit_Controle, setTG_Unit_Controle] = useState("");
  const [Kitting, setKitting] = useState("");
  const [Production, setProduction] = useState("");
  const [Test, setTest] = useState("");
  const [Controle, setControle] = useState("");
  const [Attente_Amont_Aval_Kitting, setAttente_Amont_Aval_Kitting] =
    useState("");
  const [Attente_Amont_Aval_Production, setAttente_Amont_Aval_Production] =
    useState("");
  const [Attente_Amont_Aval_Test, setAttente_Amont_Aval_Test] = useState("");
  const [Attente_Amont_Aval_Controle, setAttente_Amont_Aval_Controle] =
    useState("");
  const [amont_Kitting_h, setamont_Kitting_h] = useState("");
  const [aval_Kitting_h, setaval_Kitting_h] = useState("");
  const [amont_Production, setamont_Production] = useState("");
  const [Aval_Production, setAval_Production] = useState("");
  const [Amon_Test, setAmon_Test] = useState("");
  const [Aval_Test, setAval_Test] = useState("");
  const [Amont_Controle, setAmont_Controle] = useState("");
  const [Aval_Controle, setAval_Controle] = useState("");
  const [Net_VA, setNet_VA] = useState("");
  const [Brut_VA, setBrut_VA] = useState("");
  const [Perimetre_de_Production, setPerimetre_de_Production] = useState("");
  const Navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
          width: "400px",
          padding: "15px",
          marginTop: "35px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Article"
                  required
                  fullWidth
                  id="Article"
                  label="Article"
                  autoFocus
                  onChange={(e) => {
                    setArticle(e.target.value);
                  }}
                  value={Article}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Code_Porteur"
                  label="Code_Porteur"
                  name="Code_Porteur"
                  autoComplete="Code_Porteur"
                  onChange={(e) => setCode_Porteur(e.target.value)}
                  value={Code_Porteur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Programme"
                  label="Programme"
                  name="Programme"
                  autoComplete="Programme"
                  onChange={(e) => setProgramme(e.target.value)}
                  value={Programme}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Ligne_de_Production"
                  label="Ligne_de_Production"
                  name="Ligne_de_Production"
                  autoComplete="Ligne_de_Production"
                  onChange={(e) => setLigne_de_Production(e.target.value)}
                  value={Ligne_de_Production}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Achet_Plan"
                  label="Achet_Plan"
                  name="Achet_Plan"
                  autoComplete="Achet_Plan"
                  onChange={(e) => setAchet_Plan(e.target.value)}
                  value={Achet_Plan}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="PDP_MRP"
                  label="PDP_MRP"
                  name="PDP_MRP"
                  autoComplete="PDP_MRP"
                  onChange={(e) => setPDP_MRP(e.target.value)}
                  value={PDP_MRP}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Gestionnaire_Client"
                  label="Gestionnaire_Client"
                  name="Gestionnaire_Client"
                  autoComplete="Gestionnaire_Client"
                  onChange={(e) => setGestionnaire_Client(e.target.value)}
                  value={Gestionnaire_Client}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Superieur_Production"
                  label="Superieur_Production"
                  name="Superieur_Production"
                  autoComplete="Superieur_Production"
                  onChange={(e) => setSuperieur_Production(e.target.value)}
                  value={Superieur_Production}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Dern_Op_Kitting"
                  label="Dern_Op_Kitting"
                  name="Dern_Op_Kitting"
                  autoComplete="Dern_Op_Kitting"
                  onChange={(e) => setDern_Op_Kitting(e.target.value)}
                  value={Dern_Op_Kitting}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Dern_Op_Prod"
                  label="Dern_Op_Prod"
                  name="Dern_Op_Prod"
                  autoComplete="Dern_Op_Prod"
                  onChange={(e) => setDern_Op_Prod(e.target.value)}
                  value={Dern_Op_Prod}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Dern_Op_Test"
                  label="Dern_Op_Test"
                  name="Dern_Op_Test"
                  autoComplete="Dern_Op_Test"
                  onChange={(e) => setDern_Op_Test(e.target.value)}
                  value={Dern_Op_Test}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Dern_Op_Ctrl"
                  label="Dern_Op_Ctrl"
                  name="Dern_Op_Ctrl"
                  autoComplete="Dern_Op_Ctrl"
                  onChange={(e) => setDern_Op_Ctrl(e.target.value)}
                  value={Dern_Op_Ctrl}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="TG_Unit_kitting"
                  label="TG_Unit_kitting"
                  name="TG_Unit_kitting"
                  autoComplete="TG_Unit_kitting"
                  onChange={(e) => setTG_Unit_kitting(e.target.value)}
                  value={TG_Unit_kitting}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="TG_Unit_Prod"
                  label="TG_Unit_Prod"
                  name="TG_Unit_Prod"
                  autoComplete="TG_Unit_Prod"
                  onChange={(e) => setTG_Unit_Prod(e.target.value)}
                  value={TG_Unit_Prod}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="TG_Unit_Test"
                  label="TG_Unit_Test"
                  name="TG_Unit_Test"
                  autoComplete="TG_Unit_Test"
                  onChange={(e) => setTG_Unit_Test(e.target.value)}
                  value={TG_Unit_Test}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="TG_Unit_Controle"
                  label="TG_Unit_Controle"
                  name="TG_Unit_Controle"
                  autoComplete="TG_Unit_Controle"
                  onChange={(e) => setTG_Unit_Controle(e.target.value)}
                  value={TG_Unit_Controle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Kitting"
                  label="Kitting"
                  name="Kitting"
                  autoComplete="Kitting"
                  onChange={(e) => setKitting(e.target.value)}
                  value={Kitting}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Production"
                  label="Production"
                  name="Production"
                  autoComplete="Production"
                  onChange={(e) => setProduction(e.target.value)}
                  value={Production}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Test"
                  label="Test"
                  name="Test"
                  autoComplete="Test"
                  onChange={(e) => setTest(e.target.value)}
                  value={Test}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Controle"
                  label="Controle"
                  name="Controle"
                  autoComplete="Controle"
                  onChange={(e) => setControle(e.target.value)}
                  value={Controle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Attente_Amont_Aval_Kitting"
                  label="Attente_Amont_Aval_Kitting"
                  name="Attente_Amont_Aval_Kitting"
                  autoComplete="Attente_Amont_Aval_Kitting"
                  onChange={(e) =>
                    setAttente_Amont_Aval_Kitting(e.target.value)
                  }
                  value={Attente_Amont_Aval_Kitting}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Attente_Amont_Aval_Production"
                  label="Attente_Amont_Aval_Production"
                  name="Attente_Amont_Aval_Production"
                  autoComplete="Attente_Amont_Aval_Production"
                  onChange={(e) =>
                    setAttente_Amont_Aval_Production(e.target.value)
                  }
                  value={Attente_Amont_Aval_Production}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Attente_Amont_Aval_Test"
                  label="Attente_Amont_Aval_Test"
                  name="Attente_Amont_Aval_Test"
                  autoComplete="Attente_Amont_Aval_Test"
                  onChange={(e) => setAttente_Amont_Aval_Test(e.target.value)}
                  value={Attente_Amont_Aval_Test}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Attente_Amont_Aval_Controle"
                  label="Attente_Amont_Aval_Controle"
                  name="Attente_Amont_Aval_Controle"
                  autoComplete="Attente_Amont_Aval_Controle"
                  onChange={(e) =>
                    setAttente_Amont_Aval_Controle(e.target.value)
                  }
                  value={Attente_Amont_Aval_Controle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="amont_Kitting_h"
                  label="amont_Kitting_h"
                  name="amont_Kitting_h"
                  autoComplete="amont_Kitting_h"
                  onChange={(e) => setamont_Kitting_h(e.target.value)}
                  value={amont_Kitting_h}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="aval_Kitting_h"
                  label="aval_Kitting_h"
                  name="aval_Kitting_h"
                  autoComplete="aval_Kitting_h"
                  onChange={(e) => setaval_Kitting_h(e.target.value)}
                  value={aval_Kitting_h}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="amont_Production"
                  label="amont_Production"
                  name="amont_Production"
                  autoComplete="amont_Production"
                  onChange={(e) => setamont_Production(e.target.value)}
                  value={amont_Production}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Aval_Production"
                  label="Aval_Production"
                  name="Aval_Production"
                  autoComplete="Aval_Production"
                  onChange={(e) => setAval_Production(e.target.value)}
                  value={Aval_Production}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Amon_Test"
                  label="Amon_Test"
                  name="Amon_Test"
                  autoComplete="Amon_Test"
                  onChange={(e) => setAmon_Test(e.target.value)}
                  value={Amon_Test}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Aval_Test"
                  label="Aval_Test"
                  name="Aval_Test"
                  autoComplete="Aval_Test"
                  onChange={(e) => setAval_Test(e.target.value)}
                  value={Aval_Test}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Amont_Controle"
                  label="Amont_Controle"
                  name="Amont_Controle"
                  autoComplete="Amont_Controle"
                  onChange={(e) => setAmont_Controle(e.target.value)}
                  value={Amont_Controle}
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Aval_Controle"
                  label="Aval_Controle"
                  name="Aval_Controle"
                  autoComplete="Aval_Controle"
                  onChange={(e) => setAval_Controle(e.target.value)}
                  value={Aval_Controle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Net_VA"
                  label="Net_VA"
                  name="Net_VA"
                  autoComplete="Net_VA"
                  onChange={(e) => setNet_VA(e.target.value)}
                  value={Net_VA}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Brut_VA"
                  label="Brut_VA"
                  name="Brut_VA"
                  autoComplete="Brut_VA"
                  onChange={(e) => setBrut_VA(e.target.value)}
                  value={Brut_VA}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Perimetre_de_Production"
                  label="Perimetre_de_Production"
                  name="Perimetre_de_Production"
                  autoComplete="Perimetre_de_Production"
                  onChange={(e) => setPerimetre_de_Production(e.target.value)}
                  value={Perimetre_de_Production}
                />
              </Grid>
            </Grid>{" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ height: "50px", backgroundColor: "#31525B" }}
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  addArticle(
                    {
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
                    },
                    Navigate
                  )
                );
              }}
            >
              Ajouter Article
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} style={{ marginTop: "10px" }} />
      </Container>
    </ThemeProvider>
  );
}
export default CreateArticle;
