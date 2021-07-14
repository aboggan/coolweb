import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DescriptionIcon from "@material-ui/icons/Description";
import DevicesIcon from "@material-ui/icons/Devices";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";
import React from "react";
import { NavLink } from "react-router-dom";



export default function MenuItem(props) {
  const { href, icon, label } = props;

  const showIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return <HomeIcon />;
      case "clientes":
        return <PeopleIcon />;
      case "mensajes":
        return <MessageIcon />;
      case "documentos":
        return <DescriptionIcon />;
      case "editor":
        return <DevicesIcon />;
      case "perfil":
        return <AccountCircleIcon />;
      default:
        break;
    }
  };

  return (
    <div className="menu-items__item">
      <NavLink
        exact
        to={href}
        className="menu-items__item__link"
        activeClassName="menu-items__item__link--selected"
      >
        <div className="menu-items__item__link__icon">{showIcon(icon)}</div>
        <div className="menu-items__item__link__text">{label}</div>
      </NavLink>
    </div>
  );
}
