import { Divider, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { userMessages } from "../userMessages";
import Avatar from "@material-ui/core/Avatar";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    height: "70vh",
    width: "99%",
    marginLeft: 1,
    paddingBottom: 65,
  },
  list: {
    marginBottom: theme.spacing(2),
    maxHeight: "100%",
    overflow: "auto",
    scrollbarColor: ` ${theme.palette.primary.main} white`,
  },
  listItem: {
    textOverflow: "elipsis",
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  messagesContainer: {
    paddingTop: 15,
  },
  searchInput: {
    paddingLeft: 15,
  },
  timeStamp: {
    position: "absolute",
    top: 3,
    right: 10,
    fontSize: 11,
    color: "#757070",
  },
  messageName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 13,
  },
}));

export function Messagebox(props) {
  const [messages, setMessages] = useState([]);
  const { register, handleSubmit, control, reset } = useForm();

  useEffect(() => {
    setMessages(userMessages.messages);
  }, []);
  const classes = useStyles();

  const onSubmit = (data, e) => {
    if(data.message === "") return;

    const newMsg= {
      date:"hoy",
      message: data.message,
      from: {
        name:"Alexis Boggan"
      }
    }

    setMessages([...messages, newMsg])
    e.target.reset();
  };


  return (
    <>
      <Typography variant="h5">Juan Marcos</Typography>
      <Typography>Asunto: Iva</Typography>
      <Divider />
      <List className={classes.list}>
        {messages.map(({  date, message, from }) => (
          <React.Fragment >
            <Typography>{date}</Typography>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={"person"} />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.messageName}>
                    {" "}
                    {from.name}{" "}
                  </Typography>
                }
                secondary={
                  <Typography className={classes.messageText}>
                    {message}
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      <div className="input-container">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                name="lastName"
                onChange={onChange}
              />
            )}
          />
        </form>
      </div>
    </>
  );
}
