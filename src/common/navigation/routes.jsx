import Home from "../../pages/home/home.jsx";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Admin from "../../pages/admin/admin.jsx";
import HomeIcon from '@mui/icons-material/Home';
import Dashboard from "../../pages/dashboard/dashboard.jsx";
import OrderPage from "../../pages/admin/order.jsx";
/*import PeopleAltIcon from '@mui/icons-material/PeopleAlt';*/
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import Login from "../LoginComponent/Login.jsx";
import LockOpenIcon from '@mui/icons-material/LockOpen';



const routes = [

    {
        name: "Home",
        key: 'home',
        path: '/home',
        exact: true,
        component: <Home/>,
        icon: <HomeIcon/>,
    },
    {
        name: "Dashboard",
        key: 'dashboard',
        path: '/dashboard',
        exact: true,
        component: <Dashboard/>,
        icon: <SpaceDashboardIcon/>,
    },
    {
        name: "login",
        key: 'login',
        path: "/login",
        exact: true,
        component: <Login/>,
        icon: <LockOpenIcon/>
    },
    {
        name: "admin",
        key: 'admin',
        path: '/admin',
        exact: true,
        component: <Admin/>,
        icon: <AdminPanelSettingsIcon/>,
        requiresAdmin: true, // Require admin authentication
    },
    {
        name: "order",
        key: 'order',
        path: '/order',
        exact: true,
        component: <OrderPage/>,
        icon: <StarBorderPurple500Icon/>,
        requiresAdmin: true, // Require admin authentication
    }
];
export default routes;