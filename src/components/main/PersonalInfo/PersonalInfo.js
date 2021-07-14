import React, { Fragment } from "react";
import useStyles from "./useStyles";
import { Button, Paper, Typography } from "@material-ui/core";

function PersonalInfo() {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper square elevation={0} className={classes.paper}>
        <Typography className={classes.title}>Información personal</Typography>
        <Typography className={classes.subTitle}>
          Phasellus vitae mi porta, interdum risus et, laoreet sapien. Curabitur
          sem metus, maximus eget congue a, consectetur sagittis nulla. Cras sed
          justo semper, porttitor nunc vel, efficitur odio. Nam faucibus erat id
          maximus.
        </Typography>
        <hr className={classes.separator}></hr>
        <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim mattis iaculis. Integer sollicitudin volutpat eros, vel
          maximus quam vestibulum vel. Fusce volutpat ante a mi sodales, at
          tincidunt nisi bibendum. Aenean ultrices turpis felis, iaculis maximus
          turpis pellentesque ut. Pellentesque nec sapien non risus fringilla
          molestie. Cras tincidunt, mi ut aliquet maximus, nunc ligula posuere
          quam, dignissim porttitor sapien orci vitae ipsum. Aliquam vel
          pulvinar erat. Pellentesque pulvinar leo vitae odio facilisis, non
          imperdiet elit fringilla. Pellentesque imperdiet lorem non felis
          rutrum posuere. Integer sed dapibus risus. Morbi consequat commodo
          lobortis. Nullam vehicula ipsum tellus, efficitur posuere eros
          sagittis ut. In varius sit amet neque vulputate volutpat. Morbi
          sagittis id libero vitae posuere. Vestibulum at nisi eleifend, blandit
          justo at, feugiat orci. Pellentesque porttitor turpis vitae risus
          ornare tincidunt.
        </Typography>
        <Button variant="outlined" color="primary" className={classes.button}>
          Continuar leyendo
        </Button>
      </Paper>
    </Fragment>
  );
}

export default PersonalInfo;
