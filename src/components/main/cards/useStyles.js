import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "1.5rem",
  },
  card: {
    margin: "0 0 1.5rem 0",
    height: "100%",
    "&:hover": {
      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    },
  },
  media: {
    height: 140,
  },
}));

export default useStyles;
