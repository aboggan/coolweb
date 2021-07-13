import React, { Fragment, useState } from "react";
import {
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

function Documentos({ linkClass }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Fragment>
      <Link underline="none" onClick={handleClick} className={linkClass}>
        Documentos
      </Link>
      <IconButton size="small" onClick={handleClick}>
        <ArrowDropDown />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem button>
            <ListItemText>Enviar Documentos</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Solicitar Documentos</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </Fragment>
  );
}

export default Documentos;
