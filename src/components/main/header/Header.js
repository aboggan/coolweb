import React, { Fragment } from "react";
import { AppBar, Badge, Grid, Link, Paper, Toolbar } from "@material-ui/core";
import useStyles from "./useStyles";
import logo from "../../../images/logo.png";
import WebProfesional from "./webProfesional/WebProfesional";
import Documentos from "./documentos/Documentos";
import UserAvatar from "./userAvatar/UserAvatar";

function Header() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Fragment className={classes.root}>
      <Paper elevation="0" square className={classes.paper}>
        <AppBar
          position="static"
          color="transparent"
          className={classes.appBar}
        >
          <Toolbar disableGutters>
            <Grid container alignItems="center">
              <Grid
                item
                container
                xs={11}
                sm={11}
                md={11}
                lg={11}
                justify="flex-start"
              >
                <Grid item container xs={12} sm={2} md={2} lg={2}>
                  <Link
                    underline="none"
                    href="http://www.errepar.com"
                    onClick={preventDefault}
                    className={classes.logo}
                  >
                    <img src={logo} alt="logo"></img>
                  </Link>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  sm={1}
                  md={1}
                  lg={1}
                  justify="center"
                >
                  <Link underline="none" href="/login" className={classes.miEstudio} >
                    Mi estudio
                  </Link>
                </Grid>
                <Grid
                  item
                  container
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  alignItems="center"
                >
                  <Link underline="none" className={classes.link}>
                    Dashboard
                  </Link>

                  <WebProfesional linkClass={classes.link} />
                  <Documentos linkClass={classes.link} />

                  <Badge badgeContent={14} color="secondary">
                    <Link underline="none" className={classes.link}>
                      Bandeja de entrada
                    </Link>
                  </Badge>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={1}
                sm={1}
                md={1}
                lg={1}
                justify="flex-end"
              >
                <Grid item>
                  <UserAvatar />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Paper>
    </Fragment>
  );
}

export default Header;
