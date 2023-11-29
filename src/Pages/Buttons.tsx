import { Stack } from "@mui/material";

import ButtonsVarientsComponent from "../components/Buttons/ButtonsVarient";
import ButtonsColorComponent from "../components/Buttons/ButtonsColor";
import ButtonAll from "../components/Buttons/ButtonAll";

const Buttons = () => {
  return (
    <>
      <Stack spacing={3} direction="row">
        <ButtonsVarientsComponent />
      </Stack>
      <Stack spacing={3} direction="row">
        <ButtonsColorComponent />
      </Stack>
      <Stack spacing={3} direction="row">
        <ButtonAll />
      </Stack>
    </>
  );
};

export default Buttons;
