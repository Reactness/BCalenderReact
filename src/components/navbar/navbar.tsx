import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

     appBar: {
      // zIndex: theme.zIndex.drawer + 1,
      marginBottom: theme.spacing(8),
    },

    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.appBar}>
        <AppBar color='primary' position="fixed">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              BCalender
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
    </div>
  );
}
