import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FolderSharedOutlinedIcon from '@material-ui/icons/FolderSharedOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import React from "react";
import { NavLink } from "react-router-dom";

const clientes = [
  {
    id: 1,
    primary: "Alexis Boggan",
    // tipodecliente: " - ClienteA",
  },
  {
    id: 2,
    primary: "Alejandra Cagnoni",
    // tipodecliente: " - ClienteB",
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    height: "45vh",
    paddingBottom: 15,
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  timeStamp: {
    position: "absolute",
    top: 3,
    right: 10,
    fontSize: 11,
    color: "#757070",
  },
  root: {
    textAlign: "center",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
  },
  active: {
    backgroundColor: "#7fac9c !important",
    color: "white",
    "& span": {
      color: "white",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  boton: {
    backgroundColor: theme.palette.primary.main,
    width: "50%",
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 75,
    padding: 2,
  },
  icon: {
    color: "#fff",
  },
  activeLink: {
    backgroundColor: "#7fac9c",
    color: "white",
    '&:hover': {
      backgroundColor: 'none',
    },
    
  },

}));

export default function DocumentosSideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      <div className={classes.boton}>
        <Button className={classes.icon}>
          <AddIcon />
          AGREGAR
        </Button>
      </div>
      <div className={classes.color1}>
        <ListItem
          button
          component={NavLink}
          to="/dashboard/documentos" exact
          activeClassName={classes.activeLink}
        >
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Mi unidad" />
        </ListItem>
      </div>
      <ListItem
        button
        component={NavLink} exact
        to="/dashboard/documentos/archivos"
        activeClassName={classes.activeLink}
      >
        <ListItemIcon>
          <DescriptionOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Todos los Archivos" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PeopleAltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {clientes.map(({ id, primary, tipodecliente }) => ( 
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
          <ListItemText
         disableTypography
           primary={primary}
          />
          </ListItem>
          )
  )}  
        
        </List>
        <List>
        <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <AddIcon />
            <ListItemText primary="Nuevo Cliente" />
          </ListItem>
          </List>
      </Collapse>


  
      <ListItem button
       component={NavLink}
       to="/dashboard/documentos/compartidos" exact
       activeClassName={classes.activeLink}
      >
        <ListItemIcon>
          <FolderSharedOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="Compartidos" />
      </ListItem>
      <ListItem button
       component={NavLink}
       to="/dashboard/documentos/recientes" exact
       activeClassName={classes.activeLink}
      >
        <ListItemIcon>
          <QueryBuilderIcon />
        </ListItemIcon>
        <ListItemText primary="Recientes" />
      </ListItem>
      <ListItem button
       component={NavLink}
       to="/dashboard/documentos/favoritos" exact
       activeClassName={classes.activeLink}
      >
        <ListItemIcon>
          <FavoriteBorderIcon />
        </ListItemIcon>
        <ListItemText primary="Favoritos" />
      </ListItem>
      <ListItem button
       component={NavLink}
       to="/dashboard/documentos/papelera" exact
       activeClassName={classes.activeLink}
      >
        <ListItemIcon>
          <DeleteOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Papelera" />
      </ListItem>
    </List>
  );
}
