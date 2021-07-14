import React, { Fragment } from "react";
import useStyles from "./useStyles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { cardData } from "./cardData";

function Cards() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3} justify="center" className={classes.root}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={card.imgPath}
                  title={card.label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.label}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default Cards;
