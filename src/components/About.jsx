import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { motion } from "framer-motion";
import about_image from "./images/about.jpg";

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
  content: {
    width: "40em",
    [theme.breakpoints.down("sm")]: {
      width: "15em",
      marginBottom: "3em",
    },
    padding: 20,
  },
  image: {
    width: 330,
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
    border: "2px solid black",
    borderRadius: 4,
  },
}));

function About() {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography variant="h3" className="header-bar">
          About
        </Typography>
      </div>
      <div className={classes.root}>
        <div>
          <Paper className={classes.content}>
            <Typography variant="content">
              I am pursuing my bachelors of Technology (B.Tech) in Petroleum
              Engineering. I have a great interest in the field of computer
              science. I consider myself as a "forever student", eager to build
              both technological and speaking skills through continued efforts.
              My hunger for knowledge and determination to turn information into
              action has contributed to my successes. I am currently a Co-Lead
              in the Google Developer Student Clubs, RTU chapter. I have a
              passion for opensource and have been contributing to it. I was
              also a part of the developing team of THAR 2020 (Technical Event)
              app and Techknights official website
            </Typography>
          </Paper>
        </div>
        <div className="about-image">
          <motion.img
            src={about_image}
            className={classes.image}
            alt="about_image"
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
