import React, { Fragment } from "react";
import useStyles from "./useStyles";

function Video() {
  const video = "https://www.youtube.com/embed/-eWy4uuQgk8";
  const classes = useStyles();

  return (
    <Fragment>
      <iframe
        width="1264"
        height="480"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className={classes.root}
      ></iframe>
    </Fragment>
  );
}

export default Video;
