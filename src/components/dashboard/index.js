import { Hidden } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import { Route } from "react-router-dom";
import Chat from "../Chat";
import WidgetList from "../WidgetList";
import Documentos from "./documentos";
import Header from "./header";
import Mensajes from "./mensajes";

export default function Dashboard(props) {
  return (
    <>
      <Header />

      <Container>
        <Route path="/dashboard" exact>
          <WidgetList />
        </Route>
        <Route path="/dashboard/mensajes">
          <Mensajes />
        </Route>
        <Route path="/dashboard/documentos">
          <Documentos />
        </Route>
      </Container>
      <Hidden smDown>
        <Chat />
      </Hidden>
    </>
  );
}
