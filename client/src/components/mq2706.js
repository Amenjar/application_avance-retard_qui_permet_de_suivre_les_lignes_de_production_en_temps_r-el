import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";

import {
  getetat,
  getmq2706,
  getplanif,
  getreel,
  rafraichirmqv1,
  rafraichirmqv2,
} from "../redux/actions/mq2706action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// // // function createData(name, calories, fat, carbs, protein) {
// // //   return { name, calories, fat, carbs, protein };
// // // }

// // // const rows = [
// // //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// // //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// // //   createData("Eclair", 262, 16.0, 24, 6.0),
// // //   createData("Cupcake", 305, 3.7, 67, 4.3),
// // //   createData("Gingerbread", 356, 16.0, 49, 3.9),
// // // ];
// // // const Input = styled("input")({
// // //   display: "none",
// // // });

export default function Mq2706() {
  // //   // const [excel, setFilexls] = React.useState("");

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(rafraichirmqv1());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(rafraichirmqv2());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getplanif());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getmq2706());
  }, [dispatch]);
  const rows = useSelector((state) => state.MqReducer.mq);
  console.log(rows)
  return (
    <div>
      {/* <Stack
// //         direction="row"
// //         alignItems="center"
// //         spacing={2}
// //         style={{ marginLeft: "670px", marginBottom: "50px" }}
// //       >

// //         <label htmlFor="icon-button-file">
// //           <Input
// //             accept="file.xls/*"
// //             id="icon-button-file"
// //             type="file"
// //             onChange={(e) => setFilexls(e.target.files[0])}
// //           />
// //           <IconButton color="primary" aria-label="upload file" component="span">
// //             <UploadFileIcon />
// //           </IconButton>
// //         </label>
// //         <Button
// //           variant="contained"
// //           component="span"
// //           onClick={() => dispatch(ajouterxls({ excel }))}
// //         >
// //           Upload
// //         </Button>
// //       </Stack> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ordre_fab</StyledTableCell>
              <StyledTableCell align="right">composant</StyledTableCell>
              <StyledTableCell align="right">qt_ouv</StyledTableCell>
              <StyledTableCell align="right">delai</StyledTableCell>
              <StyledTableCell align="right">code_Article</StyledTableCell>
              <StyledTableCell align="right">date_de_lancement</StyledTableCell>
              <StyledTableCell align="right">programme</StyledTableCell>
              <StyledTableCell align="right">
                perimetre_de_production
              </StyledTableCell>
              <StyledTableCell align="right">
                ligne_de_production
              </StyledTableCell>
              <StyledTableCell align="right">
                gestionnaire_client
              </StyledTableCell>
              <StyledTableCell align="right">
                superieur_production
              </StyledTableCell>
              <StyledTableCell align="right">
                k_planifié
              </StyledTableCell>
              <StyledTableCell align="right">
                p_planifié
              </StyledTableCell>
              <StyledTableCell align="right">
                t_planifié
              </StyledTableCell>
              <StyledTableCell align="right">
                c_planifié
              </StyledTableCell>
              <StyledTableCell align="right">
                k_réel
              </StyledTableCell>
              <StyledTableCell align="right">
                p_réel
              </StyledTableCell>
              <StyledTableCell align="right">
                t_reel
              </StyledTableCell>
              <StyledTableCell align="right">
                c_reel
              </StyledTableCell>
              <StyledTableCell align="right">
                k_état
              </StyledTableCell>
              <StyledTableCell align="right">
                p_état
              </StyledTableCell>
              <StyledTableCell align="right">
                t_état
              </StyledTableCell>
              <StyledTableCell align="right">
                c_état
              </StyledTableCell>
              <StyledTableCell align="right">
                ETAT_GLOBALE
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((el) => (
                <StyledTableRow key={el.ordre_fabrication}>
                  <StyledTableCell component="th" scope="row">
                    {el.ordre_fabrication}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.composant}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.qt_ouv}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.delai}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.code_article}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.date_de_lancement}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.programme}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.perimetre_de_production}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.ligne_de_production}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.gestionnaire_client}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.superieur_production}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.k_planifié}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.p_planifié}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.t_planifié}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.c_planifié}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.k_reel}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.p_reel}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.t_reel}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.c_reel}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.k_etat}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.p_etat}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.t_etat}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {el.c_etat}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {eval(el.c_etat+"+"+el.k_etat+"+"+el.p_etat+"+"+el.t_etat)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
