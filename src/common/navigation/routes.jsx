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
import Terms from "../../pages/Terms&Conditions/terms&conditions.jsx";
import PolicyIcon from '@mui/icons-material/Policy';




const routes = [

    {
        name: (
            <span style={{ color: '#0f75bc',fontWeight: 700 }}>Home</span>
        ),
        key: 'home',
        path: '/home',
        exact: true,
        component: <Home/>,
        icon: <HomeIcon style={{ color: '#0f75bc',fontWeight: 700 }}/>,

    },
    {
        name: (
            <span style={{ color: '#0f75bc',fontWeight: 700 }}>About</span>
        ),
        key: 'about',
        path: '/about',
        exact: true,
        component: <About/>,
        icon: <InfoIcon style={{ color: '#0f75bc',fontWeight: 700 }}/>,

    },
    {
        name: (
            <span style={{ color: '#0f75bc',fontWeight: 700 }}>Contact</span>
        ),
        key: 'contact',
        path: '/contact',
        exact: true,
        component: <Contact/>,
        icon: <ContactMailIcon style={{ color: '#0f75bc',fontWeight: 700 }}/>,

    },
    {
        name: (
            <span style={{ color: '#0f75bc',fontWeight: 700 }}>Policy</span>
        ),
        key: 'terms',
        path: '/terms',
        exact: true,
        component: <Terms/>,
        icon: <PolicyIcon style={{ color: '#0f75bc',fontWeight: 700 }}/>,

    },
    {
        key: 'login',
        path: '/login',
        exact: true,
        component: <AdminLogin style={{ color: '#0f75bc',fontWeight: 700 }}/>,
    },
    {
        name: (
            <span style={{ color: '#0f75bc',fontWeight: 700 }}>Dashboard</span>
        ),
        key: 'admin',
        path: '/admin',
        exact: true,
        component: <Admin/>,
        icon: <AdminPanelSettingsIcon style={{ color: '#0f75bc',fontWeight: 700 }}/>,
        requiresAdmin: true, // Require admin authentication
    },
    {
        name: (
            <span style={{ color: '#0f75bc',fontWeight: 700 }}>Order</span>
        ),
        key: 'order',
        path: '/order',
        exact: true,
        component: <OrderPage/>,
        icon: <StarBorderPurple500Icon style={{ color: '#0f75bc',fontWeight: 700 }}/>,
        requiresAdmin: true, // Require admin authentication
    }

];
export default routes;