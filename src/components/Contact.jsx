import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";

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
  button: {
    marginTop: "3em",
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography variant="h3" className="header-bar">
          Contact Me!
        </Typography>
      </div>
      <Grid
        className={classes.button}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid>
          <a
            class="typeform-share button"
            href="https://form.typeform.com/to/EVyvs3Ba?typeform-medium=embed-snippet"
            data-mode="popup"
          >
            <motion.button className="button-contact">
              Click Here! 🙋‍♂️
            </motion.button>
          </a>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Contact;
