import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { default as React } from 'react';




const useStyles = makeStyles((theme) => ({
  root: {
    color: "#7e7e7e",
  },
}));

export default function Widget1(props) {
  
  const classes = useStyles();

  function NotificationIcon() {
    return (
        <FiberManualRecordIcon style={{ color: '#c30a20' }} />
    )
  }
  
  return (
    <>
    <Container className={classes.root}>

    
      <Typography variant="h4" align="left" color="inherit">Notificaciones</Typography>
      <div>
      <List component="nav" aria-label="main mailbox folders" color="inherit">
        <ListItem button>
          <ListItemIcon>
            <NotificationIcon />
          </ListItemIcon>
          <ListItemText primary="Mensaje recibido de Juan Cortés" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationIcon />
          </ListItemIcon>
          <ListItemText primary="Vencimiento monotributo" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationIcon />
          </ListItemIcon>
          <ListItemText primary="Documento agregado por Ana Pérez" />
        </ListItem>
      </List>
    </div>
    </Container>
    </>
  )
}
