import {
  Avatar,
  IconButton,

  Menu,
  MenuItem
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import Messages from "./Messages";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    position: "fixed",
    bottom: 0,
    right: 0,
    "& .MuiAccordionSummary-content": {
      margin: 0,
    },
    "& .Mui-expanded": {
      minHeight: "auto",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: 12,
    paddingTop: 12,
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    margin: 0,
    minHeight: "auto",
  },
  details: {
    padding: "0",
  },
  moreBtn: {
    fontSize: "11px",
  },
  noMargin: {
    margin: 0,
    minHeight: "auto",
  },
  avatar: {
    marginTop: 5,
  },
  botones: {
    marginLeft: 20,
  },
}));

export default function Chat() {
  const classes = useStyles();
  const profile =
    "https://lh3.googleusercontent.com/a-/AOh14GiEpSHmc6ur0ash2rKT6XiuVe7ZY_ji2ExZi4-VcQ=s96-c";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation()
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Accordion className={classes.container}>
        <AccordionSummary
          expandIcon={<ExpandLessIcon style={{ color: "white" }} />}
        >
          <Avatar
            alt="Profile Picture"
            src={profile}
            className={classes.avatar}
          />

          <Typography className={classes.heading}>Mensajes</Typography>
          <div className={classes.botones}>
            <IconButton color="inherit" onClick={(e) => e.stopPropagation()}>
              <CreateIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>Nueva conversación</MenuItem>
              <MenuItem onClick={handleClose}>Configuración de mensajes</MenuItem>
              <MenuItem onClick={handleClose}>Establecer mensaje de ausencia</MenuItem>
            </Menu>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Messages></Messages>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
