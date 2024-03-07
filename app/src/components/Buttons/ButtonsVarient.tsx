import { Button } from "@mui/material";

const ButtonsVarientsComponent = () => {
  return (
    <>
      {/* we use text varient when we want to grab less attention to this button */}
      <Button variant="text">text</Button>

      {/**
       *  We use outlined varient when we want to grab attention in between text varient and contained varient.(secondary actions)
       *  Example:
       *        Cancel button
       *        Goback button
       */}
      <Button variant="outlined">Outlined</Button>

      {/**
       *  We use contained when we want to grab more attention(primarry attention) to this button.
       *  Example:
       *        Regiter button
       *        Login button
       */}
      <Button variant="contained">Contained</Button>
    </>
  );
};

export default ButtonsVarientsComponent;
