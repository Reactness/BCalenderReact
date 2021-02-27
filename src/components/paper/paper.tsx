import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
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
    <div className={classes.paper}>
      <Paper children={props.children}/>
      </div>

  );
}

