import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

/**
 * A reusable functional component that represents a Material-UI dialog/modal.
 * @param {Object} props - The props passed to the component.
 * @param {boolean} props.open - Controls the visibility of the dialog.
 * @param {Function} props.onClose - Callback function to handle the closing of the dialog.
 * @returns {JSX.Element} - The rendered component.
 */

type DialogProps = {
  open: boolean;
  onClose: (value: boolean) => void;
};

const ModalView = (props: DialogProps) => {
  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <DialogTitle>Submit the text?</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Are u sure</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.onClose(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalView;
