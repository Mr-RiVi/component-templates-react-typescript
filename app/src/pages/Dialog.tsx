import React, { useState } from "react";

import { Button } from "@mui/material";
import ModalView from "../components/Dialog/ModalView";

const Dialog = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={() => setDialogOpen(true)}
      >
        View
      </Button>
      <ModalView
        open={isDialogOpen}
        onClose={setDialogOpen}
        content={{ hello: 12 }}
      />
    </>
  );
};

export default Dialog;
