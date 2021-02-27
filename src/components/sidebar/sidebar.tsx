import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuButton from "../menuButton/menuButton";
import Hidden from "@material-ui/core/Hidden";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      // paddingTop: '100px'
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: theme.zIndex.appBar - 1,
      position: "absolute",
      height: "100%",
      // marginLeft: theme.spacing(1),
    },
    drawerContainer: {
      overflow: "auto",
      marginTop: -theme.spacing(9),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);



export default function SidebarComponent(props: any) {
  const classes = useStyles();
  const drawer = (
    <div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  // const [mobileOpen, setMobileOpen] = React.useState(props)
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen)
  // }

  return (
    <div>
      <div className={classes.sidebar}>
        <CssBaseline />
        <Hidden smUp implementation="css">

        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor='left'
          open={props.mobileOpen}
          onClose={props.close}
          ModalProps={{keepMounted: true}}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
         {drawer}
        </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>

      </div>
    </div>
  );
}
