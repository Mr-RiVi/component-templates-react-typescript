import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

/**
 * A reusable functional component that represents a Material-UI
 * select/dropdown menu.
 * @param {Object} props - The props passed to the component.
 * @param {string[] | number[]} props.options - The array of options to be shown in the dropdown menu.
 * @param {string} props.label - The description or label for the dropdown menu.
 * @returns {JSX.Element} - The rendered component.
 */

type DialogProps = {
  [key: string]: any;
};

// Props destructured in here
const ModalView = (props: DialogProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={props.open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Submit the text?</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Are u sure</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalView;
