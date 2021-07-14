import React, { Fragment, useState } from "react";
import useStyles from "./useStyles";
import user from "../../../../images/user.jpg";
import {
  Avatar,
  Divider,
  IconButton,
  MenuList,
  MenuItem,
  Paper,
  Popover,
} from "@material-ui/core";

function UserAvatar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
    <Fragment>
      <IconButton onClick={handleClick}>
        <Avatar src={user} alt="userAvatar" className={classes.img}></Avatar>
      </IconButton>
      <Popover
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Paper>
          <MenuList>
            <MenuItem onClick={handleClose}>Mis Datos</MenuItem>
            <MenuItem onClick={handleClose}>Mi Errepar</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    </Fragment>
  );
}

export default UserAvatar;
