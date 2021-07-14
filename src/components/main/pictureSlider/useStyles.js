import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
      width: '100%',
      borderStyle: 'none',
      verticalAlign: 'middle'
  },
  leftArrow: {
    position: 'absolute',
    top: '100vh',
    left: '32px',
    zIndex: 10,
    color: 'white'
  },
  rightArrow: {
    position: 'absolute',
    top: '100vh',
    right: '32px',
    zIndex: 10,
    color: 'white'
  },
  label: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    zIndex: 10,
    color: 'white'
  },
  stepper: {
    display: 'none'
  },
  radio:{
    color:"white",
  },
  checked: {
    color: "white"
  },
  radioGroup: {
    position: 'absolute',
    top: '150%',
    left: '50%',
    zIndex: 10,
  }
}));

export default useStyles;
