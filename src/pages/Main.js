import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme/theme";

import Header from "../components/main/header/Header";
import PictureSlider from "../components/main/pictureSlider/PictureSlider";
import PersonalInfo from "../components/main/PersonalInfo/PersonalInfo";
import Blog from "../components/main/blog/Blog";
import Video from "../components/main/video/Video";
import Cards from "../components/main/cards/Cards";
import Footer from "../components/main/footer/Footer";

function main() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Paper square elevation={0}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <PictureSlider />
            </Grid>
            <Grid item xs={12}>
              <PersonalInfo />
            </Grid>
            <Grid item xs={12}>
              <Blog />
            </Grid>
            <Grid item xs={12}>
              <Video />
            </Grid>
            <Grid item xs={12}>
              <Cards />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Fragment>
  );
}

export default main;
