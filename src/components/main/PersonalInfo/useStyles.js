import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "4rem 2rem 4rem 2rem",
    backgroundColor: theme.palette.background.erreparMedium,
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: theme.typography.fontWeightLight,
    lineHeight: "1.2",
    margin: "0 0 0.5rem 0",
  },
  subTitle: {
    fontSize: "1.25rem",
    fontWeight: 300,
    lineHeight: "1.5",
    margin: "0 0 1rem 0",
  },
  separator: {
    margin: "1.5rem 0 1.5rem 0",
    borderTopStyle: "solid",
    borderTopColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: "1px",
  },
  paragraph: {
    margin: "0 0 1rem 0",
  },
  button: {
    fontWeight: 600,
  },
}));

export default useStyles;
