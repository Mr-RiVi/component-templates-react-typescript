import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import img from "../../logo.svg";
import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";

const CardComp1 = () => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardMedia component="img" height="194" image={img} alt="Paella dish" />

        <CardContent>
          <Typography>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CardComp1;
