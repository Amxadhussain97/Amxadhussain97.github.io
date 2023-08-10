import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Slide,
  } from "@mui/material";
  import React from "react";
  import WarningAmberIcon from "@mui/icons-material/WarningAmber";
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  export default function Dialogue(props) {
    const { confirmDialog, setConfirmDialog } = props;
    return (
      <Dialog
        open={confirmDialog.isOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ textAlign: "center" }}>
          <WarningAmberIcon color="red" sx={{ fontSize: "4rem" }} />
          <DialogContentText id="alert-dialog-slide-description">
            {confirmDialog.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <ButtonRed
            onClick={() => {
              if (confirmDialog.onCancel) {
                confirmDialog.onCancel();
              } else {
                setConfirmDialog({ ...confirmDialog, isOpen: false });
              }
            }}
          >
            Disagree
          </ButtonRed>
          <ButtonGreen onClick={confirmDialog.onConfirm}>Agree</ButtonGreen> */}
        </DialogActions>
      </Dialog>
    );
  }
  