import * as React from "react";
import Box from "@mui/material/Box";

import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { editjour } from "../redux/actions/jourFaction";
import { IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit({ row }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = React.useState(row.date);
  const [description, setDescription] = React.useState(row.description);
  const [type, setType] = React.useState(row.type);
  const dispatch = useDispatch();

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginLeft: "30px" }}
          >
            Ajouter jour ferier
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ marginLeft: "30px" }}
          >
            <input
              placeholder="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ marginLeft: "30px" }}
          >
            <input
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ marginLeft: "30px" }}
          >
            <input
              placeholder="type"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </Typography>
          <button
            style={{ marginTop: "5px", marginLeft: "80px" }}
            onClick={() => {
              dispatch(editjour(row.id, { date, description, type }));
              handleClose();
            }}
          >
            Edit
          </button>
        </Box>
      </Modal>
    </div>
  );
}
