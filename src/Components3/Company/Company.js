import React,{ useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import DeleteIcon from '@material-ui/icons/Delete';

import { createTheme } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,Container,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DeleteCv from "../deleteCV/DeleteCv"
import Jobpost from "../../Components2/AdminPage/NewFileAdmin/Event"
import Showcv from '../ShowCV/Showcv'
import MainCompany from '../MainCompany/MainCompany'
import LoggedOut from '../LoggedOut/LoggedOut'

import fakegmail from '../../Component/Fakedata/emailfake.json'

import {useHistory} from 'react-router-dom'





const drawerWidth = 10;




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  link: {
    textDecoration: "none",
    color: "theme.platte.text.primary",
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
export default function Comapany() {

const [company, setcompany] = useState([])
    useEffect(() => {

        fetch("http://localhost:4500/company")
        .then(res=>res.json())
        .then(data =>setcompany(data))        


    }, [])

     let user =JSON.parse(localStorage.getItem('user'));
    

  const classes = useStyles();
  const theme = useTheme();
 
   const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



 let  isDEVELOPER = company.some (value=> value.email === user.email)
  

const history =useHistory()

  const logout2 = () => {
    
    history.push('/home')
    // window.location.reload();

  }


  return (

    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Company Page
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
            
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            
          </Drawer>
        
        

        {

          isDEVELOPER ? <List>

        <Link to="/company" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <HomeIcon style={{color:"#260f33"}}></HomeIcon>
                  
                </ListItemIcon>

                <ListItemText primary={"Company"} style={{color:"#260f33"}} />
              </ListItem>
            </Link>


            <Link to="/jobpost" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  
                  <MailIcon style={{color:"#260f33"}}></MailIcon>
                </ListItemIcon>

                <ListItemText primary={"JobPost"} style={{color:"#260f33"}} />
              </ListItem>
            </Link>
            <Link to="/deletecv" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DeleteIcon style={{color:"#260f33"}}/>
                </ListItemIcon>

                <ListItemText primary={"DeleteCV"} style={{color:"#260f33",fontFamily: 'Roboto Slab'}}/>
              </ListItem>
            </Link>

            <Link to="/showcv" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DeleteSweepIcon style={{color:"#260f33"}}/>
                </ListItemIcon>

                <ListItemText primary={"Show CV"} style={{color:"#260f33"}}/>
              </ListItem>
            </Link>

            <Link to="/loggedout" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DeleteSweepIcon style={{color:"#260f33"}}/>
                </ListItemIcon>

                <ListItemText primary={"Logged Out"} style={{color:"#260f33"}}/>
              </ListItem>
            </Link>


            
          </List> : 
          
          
          <div>

          
          


          <button btn btn-primary onClick={logout2}>back Homepage</button>

         
          
          
          
          
          
          </div>
        }
        
     
       <Switch>


        <Route exact path="/company">

         <Container>
        <MainCompany />
         </Container>

        </Route>


        <Route exact path="/jobpost">

         <Container>
             <Jobpost></Jobpost>
         </Container>

        </Route>

        <Route exact path="/loggedout">

         <Container>
             <LoggedOut></LoggedOut>
         </Container>

        </Route>



         <Route exact path="/deletecv">

         <Container>
              <DeleteCv></DeleteCv>
         </Container>

        </Route>
        
         <Route exact path="/showcv">


         <Container>
         
         
        
        <Showcv></Showcv> 

         </Container>

        </Route>
        
        
        
        
        </Switch>
    </div>
    </Router>
  );
}