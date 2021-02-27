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
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import { IconButton } from "@material-ui/core";


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

    navbarButton: {
      margin: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      }
    },

    navbarIconButton: {
      margin: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        display: 'none', 

      }
    },
  })
);

export default function Navbar(props: any) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.appBar}>
        <AppBar color='default' position="fixed">
          <Toolbar>
            {props.children}
            
            <Typography variant="h4" className={classes.title}>
              BCalender
            </Typography>
            <Button size="large"  className={classes.navbarButton} variant="outlined" color="primary">Регистрация</Button>
            <Button size="large"  className={classes.navbarButton} variant="outlined" color="primary">Логин</Button>
            <IconButton  className={classes.navbarIconButton} aria-label='login'>
              <LockOpenRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
    </div>
  );
}
