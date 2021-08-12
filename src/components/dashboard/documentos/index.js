import { Container, Grid, Divider } from "@material-ui/core";
import React from "react";

import { Hidden } from "@material-ui/core";

import DocumentosSideBar from './DocumentosSideBar';
//test 2
export default function Documentos(props) {
  return (
    <>
      <Divider />
      <Container>
        <Grid container>
          <Hidden mdDown>
            <Grid item md={3}>
           <DocumentosSideBar/>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={8}>
 
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
