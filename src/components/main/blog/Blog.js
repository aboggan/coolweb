import React, { Fragment } from "react";
import useStyles from "./useStyles";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Paper,
  Typography,
} from "@material-ui/core";

import blogsData from "./blogsData";

function Blog() {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper square elevation={0} className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={1} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
            <List className={classes.list}>
              {blogsData.map((blog, index) => (
                <ListItem alignItems="center" key={blog.title}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={blog.img}
                      alt={blog.title}
                      className={classes.img}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography className={classes.title}>
                        {blog.link !== "" ? (
                          <a href={blog.link} className={classes.a}>
                            {blog.title}
                          </a>
                        ) : (
                          <div>{blog.title}</div>
                        )}
                      </Typography>
                    }
                    secondary={
                      <Typography className={classes.body}>
                        {blog.content}
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} xl={1}></Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default Blog;
