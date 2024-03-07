import { Card, CardContent, Stack } from "@mui/material";

import ButtonsVarientsComponent from "../components/Buttons/ButtonsVarient";
import ButtonsColorComponent from "../components/Buttons/ButtonsColor";
import ButtonAll from "../components/Buttons/ButtonAll";

const Buttons = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack spacing={3} direction="row">
            <ButtonsVarientsComponent />
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack spacing={3} direction="row">
            <ButtonsColorComponent />
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack spacing={3} direction="row">
            <ButtonAll />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default Buttons;
