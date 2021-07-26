import { Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import logoSrc from "../../../images/logoDashboard.png";
import MenuList from "./MenuList";
import Chat from '../../Chat';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  inputStyles: {
    height: 40,
    backgroundColor: "#e4e4e6",
    "& .MuiFilledInput-root:focus": {
      backgroundColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#C52328",
      borderWidth: "2px",
  },
  },
  noShadow: {
    boxShadow: 'none',
  },
  headerMobile: {
    padding: '0 10px',
  },
  menuListMobile: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: "white",
    zIndex: 999,
  },
}));

export default function Header() {
  const classes = useStyles();

  function Logo() {
    const img = <img style={{ width: 175 }} src={logoSrc} />;
    return (
      <div style={{ textAlign: 'center' }} >
        {img}
      </div>
    )
  }

  function SearchField() {
    return (
      <TextField
            variant="outlined"
            id="input-with-icon-textfield"
            fullWidth={true}
            className="search-field"
            placeholder="Buscar"
            InputProps={{
              className: classes.inputStyles,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
    )
  }

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <div className={classes.headerMobile}>
          <Logo />
          <SearchField />

        </div>
      </Hidden>
      <Hidden smDown>
      <AppBar position="static" color="transparent" className={classes.noShadow}>
        <Toolbar>
          <Logo />
          <SearchField />
          <MenuList />
        </Toolbar>
      </AppBar>
      </Hidden>
      <Hidden mdUp>
          <div className={classes.menuListMobile}>
            <MenuList />
          </div>
      </Hidden>
    </div>
  );
}
