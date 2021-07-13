import React, { Fragment, useState } from "react";
import useStyles from "./useStyles";
import { IconButton, MobileStepper, Radio } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Brightness1 } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { picturesData } from "./picturesData";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function PictureSlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = picturesData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Fragment>
      <IconButton
        disabled={activeStep === 0 ? true : false}
        onClick={handleBack}
        className={classes.leftArrow}
      >
        <ArrowBackIos fontSize="large"></ArrowBackIos>
      </IconButton>
      <IconButton
        disabled={activeStep === maxSteps - 1 ? true : false}
        onClick={handleNext}
        className={classes.rightArrow}
      >
        <ArrowForwardIos fontSize="large"></ArrowForwardIos>
      </IconButton>
      <div className={classes.radioGroup}>
      {picturesData.map((step, index) => (
        <Radio
        checked={activeStep === index ? true : false} 
        onChange={()=> (handleStepChange(index))}
        checkedIcon={<Brightness1 className={classes.checked}/>} 
        className={classes.radio}
        />
      ))}
      </div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        enableMouseEvents
        index={activeStep}
        onChangeIndex={handleStepChange}
        className={classes.root}
      >
        {picturesData.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                src={step.imgPath}
                alt={step.label}
                className={classes.img}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
      />
    </Fragment>
  );
}

export default PictureSlider;
