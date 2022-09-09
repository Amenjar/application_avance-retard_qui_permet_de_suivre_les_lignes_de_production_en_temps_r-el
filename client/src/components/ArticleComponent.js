import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, getArticles } from "../redux/actions/articleaction";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Modale from "./Modale";

//import { mise_a_jour } from "../redux/actions/xlsaction";
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function ArticleComponent({ search, setSearch }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  const rows = useSelector((state) => state.ArticleReducer.articles);
  return (
    <div>
      <Box
        sx={{
          width: 1535,
        }}
      >
        <TextField
          fullWidth
          label="Search"
          id="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Box>

      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
          id="emp-table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Article</TableCell>
              <TableCell>Code_Porteur</TableCell>
              <TableCell align="right">
                Programme;
              </TableCell>
              <TableCell align="right">
                Perimetre_de_Production
              </TableCell>
              <TableCell align="right">Ligne_de_Production</TableCell>
              <TableCell align="right">PDP_MRP</TableCell>
              <TableCell align="right">
                Achet_Plan
              </TableCell>
              <TableCell align="right">
                Gestionnaire_Client
              </TableCell>
              <TableCell align="right">
                Superieur_Production
              </TableCell>
              <TableCell align="right">
                Dern_Op_Kitting
              </TableCell>
              <TableCell align="right">Dern_Op_Prod;</TableCell>
              <TableCell align="right">Dern_Op_Test</TableCell>
              <TableCell align="right">Dern_Op_Ctrl</TableCell>
              <TableCell align="right">TG_Unit_kitting</TableCell>
              <TableCell align="right">TG_Unit_Prod</TableCell>
              <TableCell align="right">TG_Unit_Test</TableCell>
              <TableCell align="right">TG_Unit_Controle</TableCell>
              <TableCell align="right">Kitting</TableCell>
              <TableCell align="right">Production</TableCell>
              <TableCell align="right">Test</TableCell>
              <TableCell align="right">
                Controle
              </TableCell>
              <TableCell align="right">
                Attente_Amont_Aval_Kitting
              </TableCell>
              <TableCell align="right">
                Attente_Amont_Aval_Production
              </TableCell>
              <TableCell align="right">
                Attente_Amont_Aval_Test
              </TableCell>
              <TableCell align="right">
                amont_Kitting_h
              </TableCell>
              <TableCell align="right">
                amont_Kitting_h
              </TableCell>
              <TableCell align="right">
                aval_Kitting_h
              </TableCell>
              <TableCell align="right">
                amont_Production
              </TableCell>
              <TableCell align="right">Aval_Production</TableCell>
              <TableCell align="right">Amon_Test</TableCell>
              <TableCell align="right">Aval_Test</TableCell>
              <TableCell align="right">Amont_Controle</TableCell>
              <TableCell align="right">Aval_Controle</TableCell>
              <TableCell align="right">Net_VA</TableCell>
              <TableCell align="right">Brut_VA</TableCell>
              <TableCell align="right">delete</TableCell>
              <TableCell align="right">edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .filter((row) =>
                  row.article
                    .toUpperCase()
                    .includes(search.toUpperCase().trim())
                )
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.article}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.code_porteur}
                    </TableCell>
                    <TableCell align="right">
                      {row.programme}
                    </TableCell>
                    <TableCell align="right">
                      {row.perimetre_de_production}
                    </TableCell>
                    <TableCell align="right">
                      {row.ligne_de_production}
                    </TableCell>
                    <TableCell align="right">
                      {row.pdp_mrp}
                    </TableCell>
                    <TableCell align="right">
                      {row.achet_plan}
                    </TableCell>
                    <TableCell align="right">
                      {row.gestionnaire_client}
                    </TableCell>
                    <TableCell align="right">
                      {row.superieur_production}
                    </TableCell>
                    <TableCell align="right">
                      {row.dern_op_kitting}
                    </TableCell>
                    <TableCell align="right">
                      {row.dern_op_prod}
                    </TableCell>
                    <TableCell align="right">
                      {row.dern_op_test}
                    </TableCell>
                    <TableCell align="right">
                      {row.dern_op_ctrl}
                    </TableCell>
                    <TableCell align="right">
                      {row.tg_unit_kitting}
                    </TableCell>
                    <TableCell align="right">
                      {row.tg_unit_prod}
                    </TableCell>
                    <TableCell align="right">
                      {row.tg_unit_test}
                    </TableCell>
                    <TableCell align="right">
                      {row.tg_unit_controle}
                    </TableCell>
                    <TableCell align="right">
                      {row.kitting}
                    </TableCell>
                    <TableCell align="right">
                      {row.production}
                    </TableCell>
                    <TableCell align="right">
                      {row.test}
                    </TableCell>
                    <TableCell align="right">
                      {row.controle}
                    </TableCell>
                    <TableCell align="right">
                      {row.attente_amont_aval_kitting}
                    </TableCell>
                    <TableCell align="right">
                      {row.attente_amont_aval_production};
                      
                    </TableCell>
                    <TableCell align="right">
                     
                      {row.attente_amont_aval_test}
                    </TableCell>
                    <TableCell align="right">
                      {row.attente_amont_aval_controle}
                    </TableCell>
                    <TableCell align="right">
                      {row.amont_kitting_h}
                    </TableCell>
                    <TableCell align="right">
                      {row.aval_kitting_h}
                    </TableCell>
                    <TableCell align="right">
                      {row.amont_production}
                    </TableCell>
                    <TableCell align="right">
                      {row.aval_production};
                    </TableCell>
                    <TableCell align="right">
                      {row.amon_test}
                    </TableCell>
                    <TableCell align="right">
                      {row.aval_test}
                    </TableCell>
                    <TableCell align="right">
                      {row.amont_controle}
                    </TableCell>
                    <TableCell align="right">
                      {row.aval_controle};
                    </TableCell>
                    <TableCell align="right">
                     {row.net_va}
                    </TableCell>
                    <TableCell align="right">{row.brut_va}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          dispatch(deleteArticle(row.id));
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <Modale row={row}></Modale>
                    </TableCell>
                    {console.log(row)}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReactHTMLTableToExcel
        className="btn btn-info"
        table="emp-table"
        filename="Emp Excel file"
        sheet="Sheet"
        buttonText="Export to Excel"
      ></ReactHTMLTableToExcel>
    </div>
  );
}
