import React, { Fragment, useState } from "react";
import {
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

function WebProfesional({ linkClass }) {
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
        Web Profesional
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
            <ListItemText>Administrar mi Web</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Añadir entrada</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Editar entrada</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText>Imprimir perfil</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </Fragment>
  );
}

export default WebProfesional;
