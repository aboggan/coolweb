import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Mensajes from "./mensajes";
import WidgetList from "../WidgetList";

import Container from "@material-ui/core/Container";
import Chat from "../Chat";
import { Hidden } from "@material-ui/core";
import Widget1 from "../Widgets/Widget1";
import Widget2 from "../Widgets/Widget2";
export default function Dashboard(props) {
  return (
    <>
      <Header />

      <Container>
        <Route path="/dashboard" exact>
          <WidgetList />
        </Route>
        <Route path="/dashboard/mensajes">
          <Widget2 />
        </Route>
        <Route path="/dashboard/clientes">
          <Widget1 />
        </Route>
      </Container>
      <Hidden smDown>
        <Chat />
      </Hidden>
    </>
  );
}
