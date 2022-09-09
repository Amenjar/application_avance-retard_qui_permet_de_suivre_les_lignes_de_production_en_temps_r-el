import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

import { deletejour, getjoursferier } from "../redux/actions/jourFaction";

import BasicModal from "./Modal";
import { IconButton } from "@mui/material";
import ModalEdit from "./ModalEdit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#231651",
    color: "white",
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

export default function Calendrier() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getjoursferier());
  }, [dispatch]);

  const rows = useSelector((state) => state.JourfReducer.joursf);

  return (
    <div>
      <BasicModal></BasicModal>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        style={{ marginLeft: "670px", marginBottom: "50px" }}
      >
        {console.log(rows)}
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>date</StyledTableCell>
              <StyledTableCell align="right">description</StyledTableCell>
              <StyledTableCell align="right">type</StyledTableCell>
              <StyledTableCell align="right">delete</StyledTableCell>
              <StyledTableCell align="right">edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.type}</StyledTableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(deletejour(row.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <ModalEdit row={row} />
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
