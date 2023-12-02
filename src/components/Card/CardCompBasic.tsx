import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const CardCompBasic = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardCompBasic;
