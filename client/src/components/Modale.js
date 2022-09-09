import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { editArticle } from "../redux/actions/articleaction";

function Modale({ row }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(row.id);
  };

  const [Article, setArticle] = useState(row.article);
  const [Code_Porteur, setCode_Porteur] = useState(row.code_porteur);
  const [Programme, setProgramme] = useState(row.programme);
  const [Ligne_de_Production, setLigne_de_Production] = useState(
    row.ligne_de_production
  );
  const [PDP_MRP, setPDP_MRP] = useState(row.pdp_mrp);
  const [Achet_Plan, setAchet_Plan] = useState(row.achet_plan);
  const [Gestionnaire_Client, setGestionnaire_Client] = useState(
    row.gestionnaire_client
  );
  const [Superieur_Production, setSuperieur_Production] = useState(
    row.superieur_production
  );
  const [Dern_Op_Kitting, setDern_Op_Kitting] = useState(row.dern_op_kitting);
  const [Dern_Op_Prod, setDern_Op_Prod] = useState(row.dern_op_prod);
  const [Dern_Op_Test, setDern_Op_Test] = useState(row.dern_op_test);
  const [Dern_Op_Ctrl, setDern_Op_Ctrl] = useState(row.dern_op_ctrl);
  const [TG_Unit_kitting, setTG_Unit_kitting] = useState(row.tg_unit_kitting);
  const [TG_Unit_Prod, setTG_Unit_Prod] = useState(row.tg_unit_prod);
  const [TG_Unit_Test, setTG_Unit_Test] = useState(row.tg_unit_test);
  const [TG_Unit_Controle, setTG_Unit_Controle] = useState(
    row.tg_unit_controle
  );
  const [Kitting, setKitting] = useState(row.kitting);
  const [Production, setProduction] = useState(row.production);
  const [Test, setTest] = useState(row.test);
  const [Controle, setControle] = useState(row.controle);
  const [Attente_Amont_Aval_Kitting, setAttente_Amont_Aval_Kitting] = useState(
    row.attente_amont_aval_kitting
  );
  const [Attente_Amont_Aval_Production, setAttente_Amont_Aval_Production] =
    useState(row.attente_amont_aval_production);
  const [Attente_Amont_Aval_Test, setAttente_Amont_Aval_Test] = useState(
    row.attente_amont_aval_test
  );
  const [Attente_Amont_Aval_Controle, setAttente_Amont_Aval_Controle] =
    useState(row.attente_amont_aval_controle);
  const [amont_Kitting_h, setamont_Kitting_h] = useState(row.amont_kitting_h);
  const [aval_Kitting_h, setaval_Kitting_h] = useState(row.aval_kitting_h);
  const [amont_Production, setamont_Production] = useState(
    row.amont_production
  );
  const [Aval_Production, setAval_Production] = useState(row.aval_production);
  const [Amon_Test, setAmon_Test] = useState(row.amon_test);
  const [Aval_Test, setAval_Test] = useState(row.aval_test);
  const [Amont_Controle, setAmont_Controle] = useState(row.amont_controle);
  const [Aval_Controle, setAval_Controle] = useState(row.aval_controle);
  const [Net_VA, setNet_VA] = useState(row.net_va);
  const [Brut_VA, setBrut_VA] = useState(row.brut_va);
  const [Perimetre_de_Production, setPerimetre_de_Production] = useState(
    row.perimetre_de_production
  );
  const dispatch = useDispatch();

  return (
    <>
      <IconButton aria-label="edit" onClick={handleShow}>
        <EditIcon />
      </IconButton>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "40px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                editArticle(row.id, {
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
                })
              );
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
