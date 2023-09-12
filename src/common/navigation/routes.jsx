import Home from "../../pages/home/home.jsx";
import Admin from "../../pages/admin/admin.jsx";
import HomeIcon from '@mui/icons-material/Home';
import OrderPage from "../../pages/admin/order.jsx";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import AdminLogin from "../LoginComponent/Login.jsx";
import About from "../../pages/About/about.jsx";
import InfoIcon from '@mui/icons-material/Info';
import Contact from "../../pages/contact/contact.jsx";
import ContactMailIcon from '@mui/icons-material/ContactMail';




const routes = [

    {
        name: (
            <span style={{ color: '#0f75bc' }}>Home</span>
        ),
        key: 'home',
        path: '/home',
        exact: true,
        component: <Home/>,
        icon: <HomeIcon/>,

    },
    {
        name: (
            <span style={{ color: '#0f75bc' }}>About</span>
        ),
        key: 'about',
        path: '/about',
        exact: true,
        component: <About/>,
        icon: <InfoIcon/>,

    },
    {
        name: (
            <span style={{ color: '#0f75bc' }}>Contact</span>
        ),
        key: 'contact',
        path: '/contact',
        exact: true,
        component: <Contact/>,
        icon: <ContactMailIcon/>,

    },
    {
        key: 'login',
        path: '/login',
        exact: true,
        component: <AdminLogin/>,
    },
    {
        name: (
            <span style={{ color: '#0f75bc' }}>Admin</span>
        ),
        key: 'admin',
        path: '/admin',
        exact: true,
        component: <Admin/>,
        icon: <AdminPanelSettingsIcon/>,
        requiresAdmin: true, // Require admin authentication
    },
    {
        name: (
            <span style={{ color: '#0f75bc' }}>Order</span>
        ),
        key: 'order',
        path: '/order',
        exact: true,
        component: <OrderPage/>,
        icon: <StarBorderPurple500Icon/>,
        requiresAdmin: true, // Require admin authentication
    }

];
export default routes;