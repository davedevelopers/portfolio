import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
// import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "space-between",
      alignItems: "center",
    },
    marginTop: "3em",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    margin: "20px 0em",
  },
}));

function Project() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography variant="h3" className="header-bar">
          Projects
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default Project;
