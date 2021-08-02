import {
  Avatar,
  Container,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import io from "socket.io-client";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "70vh",
    width: "99%",
    marginLeft: 1,
    paddingBottom: 65,
  },
  listContainer: {
    minHeight: "380px",
  },
  list: {
    marginBottom: theme.spacing(2),
    maxHeight: "380px",
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
  senderName: {
    fontSize: 33,
    fontWeight: 600,
    "& span": {
      fontSize: 16,
    },
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
  },
  text: {
    resize: "none",
    fontSize: 19,
    fontFamily: "inherit",
    borderRadius: 15,
    border: "1px solid grey",
    padding: 11,
    width: "90%",
    outline: "none",
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
  sendIcon: {
    color: "grey",
  },
}));

export function Messagebox() {
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState("");

  const [rooms, setRooms] = useState([]);

  const { handleSubmit, control, reset } = useForm();

  const socketRef = useRef();
  const messagesEndRef = useRef();

  useEffect(() => {
    //const url = "ws://181.229.211.201:4127/";
    const url = "/api/chat";

    socketRef.current = io.connect(url);

    socketRef.current.on("socketId", (socketid) => {
      setSocketId(socketid);
    });

    socketRef.current.on("receive messages", (m) => {
      console.log("paso en el useeffect", m);
      setMessages(m);
    });
    socketRef.current.on("joined", (rooms) => {
      setRooms(rooms);
      if (rooms) sessionStorage.setItem("rooms", rooms);
    });

    socketRef.current.on("receive message", (m) => {
      getMessages();
      //scrollToBottom()
    });

    getMessages();
    handleID();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const checkVariables = () => {
    if (rooms) sessionStorage.setItem("rooms", rooms);
    if (socketId) sessionStorage.setItem("socketid", socketId);
    return false;
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleID = () => {
    socketRef.current.emit("join", { _id: "Ezequiel Loureyro" });
  };

  const getMessages = () => {
    const data = {
      roomId: "Ganancias",
      limit: 200,
      page: 1,
    };
    socketRef.current.emit("get messages", data);
  };

  const onSubmit = (data, e) => {
    if (!data.text) return;
    console.log(data);
    checkVariables(); //No effect, just to avoid build validation
    const msg = {
      roomId: "Ganancias",
      contenido: {
        texto: data.text,
      },
      remitente: {
        nombreColaborador: "Ezequiel Loureyro",
      },
    };

    socketRef.current.emit("send message", msg);
    getMessages();
    e.target.reset();
    reset();
  };

  const classes = useStyles();

  console.log("render")

  function showPicture(name) {
    const ale = "https://i.ibb.co/gJ4TqhV/yo.jpg";
    const eze = "https://i.ibb.co/sRFThht/eze.jpg";

    if (name === "Alexis Boggan") return ale;
    if (name === "Ezequiel Loureyro") return eze;
  }
  const [receiveTyping, setReceiveTyping] = useState({
    id: null,
    isTyping: false,
  });
  useEffect(() => {
    socketRef.current.on("typing", ({ remitente, typing }) => {
      setReceiveTyping({
        id: remitente,
        isTyping: typing,
      });
      scrollToBottom();
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" className={classes.senderName}>
        Alexis Boggan <span>Cliente A</span>
      </Typography>
      <Typography className={classes.subject}>Asunto: Test del chat</Typography>
      <Divider />
      <div className={classes.listContainer}>
        {!messages.docs ? (
          <LinearProgress />
        ) : (
          <List className={classes.list}>
            {messages.docs.map((mensaje, index) => (
              <>
                <ListItem key={index} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Profile Picture"
                      src={showPicture(mensaje.remitente.nombreColaborador)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography className={classes.messageName}>
                        {" "}
                        {mensaje.remitente.nombreColaborador}{" "}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        className={classes.messageText}
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {mensaje.contenido.texto}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider />
              </>
            ))}

            {receiveTyping.isTyping ? "escribiendo..." : ""}
            <div ref={messagesEndRef} />
          </List>
        )}
      </div>
      <div className="input-container">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="text"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <div className={classes.textContainer}>
                <IconButton edge="start">
                  <AttachFileIcon />
                </IconButton>
                <TextareaAutosize
                  className={classes.text}
                  onChange={onChange}
                  color="primary"
                  placeholder="Escribi tu mensaje"
                  autoFocus
                />
                <IconButton type="submit">
                  <SendIcon className={classes.sendIcon} />
                </IconButton>
              </div>
            )}
          />
        </form>
      </div>
    </Container>
  );
}
