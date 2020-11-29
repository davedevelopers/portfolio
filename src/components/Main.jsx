import React from "react";
import "./Main.css";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#252934",
    height: "100vh",
    // width: "100vw",
  },
  typography: {
    color: "#FFFFFF",
    [theme.breakpoints.up("md")]: {
      fontSize: "3em",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    marginBottom: "1rem",
  },
  name: {
    color: "#e31b6d",
  },
  button: {
    // marginTop: "1rem",
    fontSize: "1em",
    color: "#fff",
    borderColor: "#fff",
  },
}));

function Main() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
            },
            size: {
              value: 3,
            },
          },
        }}
        className={classes.root}
      />
      <motion.div className="center">
        <Typography variant="h4" className={classes.typography}>
          Hello, I am
          <span className={classes.name}> Pradhumn Dave</span> <br /> I'm a
          fullstack web developer
        </Typography>
        <motion.span
          whileHover={{
            scale: 1.3,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button variant="outlined" type="large" className={classes.button}>
            View My Work
          </Button>
        </motion.span>
      </motion.div>
    </div>
  );
}

export default Main;
