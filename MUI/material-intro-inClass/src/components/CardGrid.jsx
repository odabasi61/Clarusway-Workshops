import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import data from "../data";

export default function CardGrid() {
  return (
    <>
      <Typography variant="h4" align="center" color={"red"} m={3}>
        Card Grid
      </Typography>

      <Button color="error" variant="contained">
        Deneme
      </Button>

      {/* grid yapısı. bootstrape benziyor. break pointler ile responsiver yaparız. grid container içine grid item koyarız. */}
      {/* map döngüsünde havada destructuring yapıldı. ayrıca return kullanmadık bu yüzden süslü değil de normal parantez açtık. */}
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {data.map(({ id, name, img, text }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={img} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
