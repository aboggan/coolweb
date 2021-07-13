import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.background.erreparLight,
  },
  appBar: {
    padding: "0 0rem 0 1rem",
  },
  logo: {},
  miEstudio: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.success.main,
    fontSize: "1.25rem",
    cursor: "pointer",
  },
  link: {
    margin: "0 0.5rem 0 1.5rem",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.grey[600],
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.grey[800],
    },
  },
}));

export default useStyles;
