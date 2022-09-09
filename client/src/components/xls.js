import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_xls,
  mise_a_jour,
  transformeExcelonDb,
} from "../redux/actions/xlsaction";

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
// const Input = styled("input")({
//   display: "none",
// });

export default function Xls() {
  // const [excel, setFilexls] = React.useState("");

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(get_all_xls());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(mise_a_jour());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(transformeExcelonDb());
  }, [dispatch]);
  const rows = useSelector((state) => state.XlsReducer.allXls);

  return (
    <div>
      {/* <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        style={{ marginLeft: "670px", marginBottom: "50px" }}
      >
       
        <label htmlFor="icon-button-file">
          <Input
            accept="file.xls/*"
            id="icon-button-file"
            type="file"
            onChange={(e) => setFilexls(e.target.files[0])}
          />
          <IconButton color="primary" aria-label="upload file" component="span">
            <UploadFileIcon />
          </IconButton>
        </label>
        <Button
          variant="contained"
          component="span"
          onClick={() => dispatch(ajouterxls({ excel }))}
        >
          Upload
        </Button>
      </Stack> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Code_article</StyledTableCell>
              <StyledTableCell align="right">Ordre_fabrication</StyledTableCell>
              <StyledTableCell align="right">Qté_ouv</StyledTableCell>
              <StyledTableCell align="right">Date_de_lancement</StyledTableCell>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((el) => (
                <StyledTableRow key={el.Code_article}>
                  <StyledTableCell component="th" scope="row">
                    {el.code_article}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el.ordre_fabrication}
                  </StyledTableCell>
                  <StyledTableCell align="right">{el.qté_ouv}</StyledTableCell>
                  <StyledTableCell align="right">
                    {el.date_de_lancement}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el.programme}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el.perimetre_de_production}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el.ligne_de_production}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el.gestionnaire_client}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {el.superieur_production}
                  </StyledTableCell>
                  
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
