import React, {useContext} from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    }
 
  }),
);

export default function MenuButton(props: any) {
 const classes = useStyles();
   return (
       
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={props.onClick}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
 
  );
}
