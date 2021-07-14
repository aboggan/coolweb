import React, { Fragment } from "react";
import useStyles from "./useStyles";
import { Grid, Paper, Typography } from "@material-ui/core";

function Footer() {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper square elevation={0} className={classes.paper}>
        <Grid container direction="column" alignItems="center">
          <Typography className={classes.text}>Dirección</Typography>
          <Typography className={classes.text}>Teléfono</Typography>
          <Typography className={classes.text}>mail@mail.com</Typography>
          <Typography className={classes.text}>Información Extra</Typography>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default Footer;
