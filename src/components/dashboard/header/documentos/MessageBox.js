import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import io from "socket.io-client";

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
}));

export function Messagebox() {
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState("");
  const [message, setMessage] = useState("");

  const [rooms, setRooms] = useState([]);

  const { handleSubmit, control } = useForm();

  const socketRef = useRef();
  const messagesEndRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  useEffect(() => {
    //const url = "ws://181.229.211.201:4127/";
    const url = "http://10.8.0.5:3001/";

    socketRef.current = io.connect(url);

    socketRef.current.on("socketId", (socketId) => {
      setSocketId(socketId);
      console.log("socket id:", socketId);
    });

    socketRef.current.on("receive messages", (m) => {
      console.log("paso en el useeffect", m);
      setMessages(m);
    });
    socketRef.current.on("joined", (rooms) => {
      setRooms(rooms);
    });

    socketRef.current.on("receive message", (m) => {
      setMessage(m);
      getMessages();
      //scrollToBottom()
    });

    getMessages();
    handleID();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleID = () => {
    socketRef.current.emit("join", { _id: "Alexis Boggan" });
  };

  const getMessages = () => {
    const data = {
      roomId: "Ganancias",
      limit: 200,
      page: 1,
    };
    socketRef.current.emit("get messages", data);
  };

  const checkVariables = () => {
    if (socketId) return false;
    if (message) return false;
    if (rooms) return false;
  };

  const onSubmit = (data, e) => {
    if (data.message === "") return;
    console.log(checkVariables()); //No effect, just to avoid build validation
    const msg = {
      roomId: "Ganancias",
      contenido: {
        texto: data.message,
      },
      remitente: {
        nombreColaborador: "Alexis Boggan",
      },
    };

    socketRef.current.emit("send message", msg);
    getMessages();
    e.target.reset();
  };

  const classes = useStyles();

  //console.log("render", messages)

  function showPicture(name) {
    const moe = "https://64.media.tumblr.com/avatar_907c1757561d_128.pnj";
    const larry =
      "data:image/jpeg;base64,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";

    if (name === "Moe") return moe;
    if (name === "Larry") return larry;
  }

  const [localTyping, setLocalTyping] = useState(false);

  const handleTyping = () => {
    if (!localTyping) {
      // solo hace algo si alguien no estaba escribiendo
      setLocalTyping(true);
      socketRef.current.emit("typing", {
        roomId: "Ganancias", // para decirle el room
        remitente: "Alexis Boggan", // para que el room sepa quién esta escribiendo
        typing: true,
      });
      setTimeout(() => {
        setLocalTyping(false);
        socketRef.current.emit("typing", {
          roomId: "Ganancias",
          remitente: "Alexis Boggan",
          typing: false,
        });
      }, 4000); //después de 4 segundos les manda  a todos que dejó de escribir
    }
  };

  return (
    <>
      <Typography variant="h5">Ezequiel Loureyro</Typography>
      <Typography>Asunto: Test del chat</Typography>
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
                      <Typography className={classes.messageText}>
                        {mensaje.contenido.texto}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider />
              </>
            ))}

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
            name="message"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                id="mensajeInput"
                variant="outlined"
                fullWidth
                onChange={onChange}
                inputRef={inputRef}
                onKeyDown={handleTyping}
              />
            )}
          />
        </form>
      </div>
    </>
  );
}
