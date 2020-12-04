import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import img_1 from "./images/1.png";
import img_2 from "./images/2.png";
import img_3 from "./images/3.png";
import img_4 from "./images/4.png";
import img_5 from "./images/5.png";
import img_6 from "./images/6.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3em",
  },
  heading: {
    textAlign: "center",
    margin: "20px 0em",
  },
  projectsSecond: {
    marginTop: "3em",
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
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid justify="space-evenly" alignItems="center">
            <motion.img
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={img_1}
              alt=""
              width="300"
              height="300"
            />{" "}
            <br />
            <div align="center">
              <Typography className="header-bar" variant="h5">
                HTML/CSS/JS
              </Typography>
            </div>
          </Grid>
          <Grid justify="space-evenly" alignItems="center">
            <motion.img
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={img_2}
              alt=""
              width="300"
              height="300"
            />
            <br />
            <div align="center">
              <Typography className="header-bar" variant="h5">
                React/Redux
              </Typography>
            </div>
          </Grid>
          <Grid justify="space-evenly" alignItems="center">
            <motion.img
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={img_3}
              alt=""
              width="300"
              height="300"
            />
            <br />
            <div align="center">
              <Typography className="header-bar" variant="h5">
                HTML/CSS/JS
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.projectsSecond}
        >
          <Grid justify="space-evenly" alignItems="center">
            <motion.img
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={img_4}
              alt=""
              width="300"
              height="300"
            />{" "}
            <br />
            <div align="center">
              <Typography className="header-bar" variant="h5">
                React/NodeJS
              </Typography>
            </div>
          </Grid>
          <Grid justify="space-evenly" alignItems="center">
            <motion.img
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={img_5}
              alt=""
              width="300"
              height="300"
            />
            <br />
            <div align="center">
              <Typography className="header-bar" variant="h5">
                NodeJS
              </Typography>
            </div>
          </Grid>
          <Grid justify="space-evenly" alignItems="center">
            <motion.img
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={img_6}
              alt=""
              width="300"
              height="300"
            />
            <br />
            <div align="center">
              <Typography className="header-bar" variant="h5">
                EmberJS
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Project;
