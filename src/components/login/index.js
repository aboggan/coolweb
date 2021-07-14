import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Redirect, useLocation } from "react-router";

import { useDispatch } from 'react-redux';

import {logIn} from '../../redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginBottom: 5,
  },
  image: {
    backgroundImage: "url(/img/fondofac.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  socialButton: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  facebokIcon: {
    color: "#1877f2"
  }
}));

export default function LoginRightSide({ location }) {
  const classes = useStyles();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const { state } = useLocation();
  const dispatch= useDispatch()

  const responseFacebook = (response) => {
    console.log("face", response);
    ///*if (response.status === undefined) return;
    if( Object.keys(response).length <= 1  || response.error!== undefined) return;
    const user = {
      name: response.name,
      userPhoto: response.picture.data.url
    }
    login(user)

    
  };


  const responseGoogle = (response) => {
    console.log("googl",response);
    const user = {
      name: response.profileObj.name,
      userPhoto: response.profileObj.imageUrl
    }

    login(user);
  };
  const responseGoogleFailure = (response) => {
    console.log(response.profileObj);
  };
  const login = (user) => {
    dispatch(logIn(user))
  };

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/dashboard"} />;
  }

  if (sessionStorage.getItem("isLogged") === "true") {
    return <Redirect to={state?.from || "/dashboard"} />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom={true}>
            Inciar sesión
          </Typography>
          <div className={classes.form}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <GoogleLogin
                  clientId="774569882947-oudtho13kck7b4fn3ottik2kr2do3t15.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      className={classes.socialButton}
                      fullWidth={true}
                      variant="text"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<FcGoogle />}
                    >
                      Entrar con Google
                    </Button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogleFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FacebookLogin
                  appId="556456215340942"
                  
                  fields="name,email,picture"
                  callback={responseFacebook}
                  
                  render={(renderProps) => (
                    <Button
                      className={classes.socialButton}
                      fullWidth={true}
                      variant="text"
                      onClick={renderProps.onClick}
                      startIcon={<FaFacebook className={classes.facebokIcon}/>}
                    >
                      Entrar con Facebook
                    </Button>
                  )}
                />
              </Grid>
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección de e-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme en este equipo"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={login}
              disabled={true}
            >
              Ingresar a Mi Estudio
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tenés cuenta? Creá una"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
