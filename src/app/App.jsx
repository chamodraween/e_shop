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
import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from "../pages/dashboard/dashboard.jsx";
import Home from "../pages/home/home.jsx";
/*import {Link} from "@mui/material";*/
import routes from "../common/navigation/routes.jsx";
import AppBar from "@mui/material/AppBar";

function App() {

  return (
    <>
      <ClippedDrawer/>
    </>
  )
}

export default App



const drawerWidth = 240;

const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
        return <Route exact path={route.path} element={route.component} key={route.key} />;
    });

function ClippedDrawer() {
  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor: '#0f75bc'  }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              e Shop
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto',}}>
            <List>
                {routes.map((val, index)=>(
                    <Link to={val.path} key={index} style={{textDecoration: 'none'}}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {val.icon}
                                </ListItemIcon>
                                <ListItemText primary={val.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar/>
            <div>
                <Routes>
                    {getRoutes(routes)}
                    {/*<Route path={'*'} element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<Home/>} key={'home'}/>
                    <Route path={'/dashboard'} element={<Dashboard/>} key={'dashboard'}/>*/}
                </Routes>
            </div>
        </Box>
      </Box>
  );
}