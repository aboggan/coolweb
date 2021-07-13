import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1.5rem 1.5rem 1.5rem 1.5rem",
    backgroundColor: theme.palette.background.erreparDarkCyan,
  },
  text: {
    color: "white",
    marginBottom: "0.25rem",
  },
}));

export default useStyles;
