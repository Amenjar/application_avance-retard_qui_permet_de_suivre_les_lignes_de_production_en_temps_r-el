import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { addjoursferier } from "../redux/actions/jourFaction";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ color: "white", backgroundColor: "#231651" }}
      >
        Ajouter JourF
      </Button>
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
              dispatch(addjoursferier({ date, description, type }));
              handleClose();
            }}
          >
            ajouter
          </button>
        </Box>
      </Modal>
    </div>
  );
}
