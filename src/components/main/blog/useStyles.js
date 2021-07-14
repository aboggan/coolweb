import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem 0 3rem 0",
  },
  paper: {},
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: "0 0 0.25rem 0",
    fontSize: "1.25rem",
    fontWeight: theme.typography.fontWeightMedium,
  },
  body: {},
  img: {
    marginRight: "1rem",
    width: 75,
    height: 75,
  },
  a: {
    cursor: "pointer",
    color: theme.palette.success.main,
    "&:hover": {
      color: theme.palette.success.main,
      textDecoration: " underline",
    },
  },
}));

export default useStyles;
