import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Routes, Route, Link, Navigate, useNavigate, Outlet, redirect, useLocation} from 'react-router-dom'
import Dashboard from "../pages/About/about.jsx";
import Home from "../pages/home/home.jsx";
/*import {Link} from "@mui/material";*/
import routes from "../common/navigation/routes.jsx";
import logo from '../assets/eshop.png';
import AppBar from "@mui/material/AppBar";
import {Fragment} from "react";
import Login from "../common/LoginComponent/Login.jsx";
import Button from "@mui/joy/Button";


function App() {


const route = useLocation();
console.log("route.path", route.pathname)


  return (
    <Box >
            <ClippedDrawer />

    </Box>
  )
}

export default App



const drawerWidth = 240;




const getRoutes = (allRoutes, auth=false) => {
    if (auth){
        return allRoutes.map((route) => {

            if (!route.requiresAdmin) {
                return <></>;
            }
            return <Route exact path={route.path} element={route.component} key={route.key}/>;
        });
    }
    else {

        return allRoutes.map((route) => {

            if (route.requiresAdmin) {
               return <></>;
            }
            return <Route exact path={route.path} element={<>{route.component}</>} key={route.key}/>;
        });
    }
}

function ClippedDrawer() {

    const navigate = useNavigate();
    let adminauth = localStorage.getItem("admin-authenticated")
    console.log('adminn auth : ', adminauth)

    const location = useLocation();
    const adminpaths = routes.filter(route => route.requiresAdmin).map(route => route.path);
    console.log(adminpaths, location.pathname)

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor: '#fff'  }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" noWrap component="div">
                    <img src={logo} className="App-logo" alt="logo" style={{ width: '50px', height: 'auto',borderRadius: 4,marginTop: 2 }} onClick={() => {navigate('/home')}}/>
                </Typography>
                {adminauth && (
                <h2 style={{color:'#494949'}}

                >
                    Admin Panel </h2>
                )}

                {adminauth && (
                    <Button
                        onClick={() => {
                            localStorage.removeItem('admin-authenticated');
                            navigate('/home');
                        }}
                    >
                        Logout
                    </Button>
                )}
            </Toolbar>

        </AppBar>
        <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,

              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',  justifyContent: 'space-between', },
            }}
        >
            <Box>
          <Toolbar />
          <Box sx={{ overflow: 'auto',}}>
            <List>

                {
                    adminpaths.includes(location.pathname) ? (
                        <> {routes.map((val, index)=>(
                            <>{val.requiresAdmin ?  <Link to={val.path} key={index} style={{textDecoration: 'none'}}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {val.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={val.name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link> : null}</>

                        ))}</>
                    ) : (<>{routes.map((val, index)=>(
                        <>{!val.requiresAdmin ?  <Link to={val.path} key={index} style={{textDecoration: 'none'}}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {val.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={val.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link> : null}</>

                    ))}</>)
                }
            </List>
          </Box>
          </Box>
            <footer style={{justifyContent: 'space-between',padding: 5,paddingRight: 6}}>
                <hr style={{ width: '95%', opacity: 0.3 }} />
                <p style={{textDecoration: 'none',paddingLeft: 17,color:'#939393',fontSize: 13,fontWeight: 700,margin: 0}}>Made by <a style={{textDecoration: 'none',color:'#0f75bc',fontWeight: 700}} href='https://github.com/chamodraween' >Chamod Raween</a></p>
                <p style={{textDecoration: 'none',paddingLeft: 17,color:'#656565',fontSize: 13,fontWeight: 700,margin: 0}}>© All rights reserved | Sri Lanka</p>
            </footer>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar/>
            <div>
                 <Routes>
                     {getRoutes(routes)}
                   {getRoutes(routes, adminauth)}
                     <Route path={'*'} element={adminpaths.includes(location.pathname)? <Navigate to='/login' /> : <Navigate to={'/home'}/>} />
                 </Routes>
            </div>
        </Box>
      </Box>
  );
}