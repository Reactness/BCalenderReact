import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import  Sidebar from "./../sidebar/sidebar";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        height: 'calc(100vh - 80px)',
        position: 'relative',
        background: '#c5cae9'
        // marginTop: theme.spacing(7),
      },
    },
  }),
);

export default function SimplePaper(props: any) {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <Paper>
<Sidebar/></Paper>
    </div>
    </div>
  );
}
