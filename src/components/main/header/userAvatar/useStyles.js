import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
    img: {
        width: 60,
        height: 60,
        "&:hover": {
            boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
          },
    }
}))

export default useStyles;