import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProfileModal({ user, children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {children ? (
        <span onClick={handleOpen}>{children}</span>
      ) : (
        <Button>
          <VisibilityIcon onClick={handleOpen} />
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h3">
            {user.name}
          </Typography>
          <Avatar sx={{ width: 100, height: 100 }} src={user?.picture?.image}>
            {user.name.slice(0, 1)}
          </Avatar>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {user.email}
          </Typography>
        </Box>
      </Modal>
    </>
    // <div>
    //   <Button onClick={handleOpen}>Open modal</Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography id="modal-modal-title" variant="h6" component="h2">
    //         Text in a modal
    //       </Typography>
    //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //       </Typography>
    //     </Box>
    //   </Modal>
    //</div>
  );
}
