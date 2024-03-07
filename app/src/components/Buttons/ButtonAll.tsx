import { Button, IconButton } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const ButtonAll = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<SendIcon />}
        disableRipple
      >
        send
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="medium"
        endIcon={<SendIcon />}
        disableElevation
      >
        send
      </Button>

      <IconButton color="error" size="large">
        <SendIcon />
      </IconButton>
    </>
  );
};

export default ButtonAll;
