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
        name: "Home",
        key: 'home',
        path: '/home',
        exact: true,
        component: <Home/>,
        icon: <HomeIcon/>,

    },
    {
        name: "About",
        key: 'about',
        path: '/about',
        exact: true,
        component: <About/>,
        icon: <InfoIcon/>,

    },
    {
        name: "Contact",
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