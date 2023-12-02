import React, { useState } from "react";

import { Button } from "@mui/material";
import ModalView from "../components/Dialog/Modal-view";

const Dialog = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <section style={{ margin: "150px 450px" }}>
        <Button variant="contained" size="large" onClick={handleOpenDialog}>
          View
        </Button>
        <ModalView
          open={isDialogOpen}
          onClose={handleCloseDialog}
          title="Your Modal Title"
          content={<p>This is the content of your modal.</p>}
        />
      </section>
    </>
  );
};

export default Dialog;
