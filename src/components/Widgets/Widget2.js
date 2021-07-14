import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { default as React } from "react";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { makeStyles } from "@material-ui/core/styles";

export default function Widget2(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h4" align="left" color="inherit">
          Archivos recientes
        </Typography>

        <Grid container>
          <Grid item md={6}>
            <List
              component="nav"
              aria-label="main mailbox folders"
              color="inherit"
            >
              <ListItem button>
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={6}>
            <List
              component="nav"
              aria-label="main mailbox folders"
              color="inherit"
            >
              <ListItem button>
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
            </List>
          </Grid>
        
        </Grid>
      </Container>
    </>
  );
}
