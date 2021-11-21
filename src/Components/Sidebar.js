import React from 'react';
import SidebarRow from './SidebarRow';
import"./Sidebar.css";
import { Apps,  ArrowCircleUpSharp, AssignmentOutlined, Dashboard, Home, LanguageSharp, LibraryBooksSharp, LocationOn, Notifications,  Person } from '@mui/icons-material';
import { Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";






function Sidebar() {

    const location = useLocation();

  
    const { pathname } = location;


    const splitLocation = pathname.split("/");
  

    return (
        <div className="sidebar">
            <div className="sidebar__home">
                <div  className={splitLocation[1] === "" ? "active" : ""} >
                <Link  exact to="/" className="sidebar__link">
                <SidebarRow Icon={Home} title="Home"
                 />
                </Link>
                </div>
            </div>
            <div>
                <div className={splitLocation[1] === "dashboard" ? "active" : ""} >
           <Link className="sidebar__link"   exact to="/dashboard">
             <SidebarRow  Icon={Dashboard} title="Dashboard" />
            </Link>
            </div>
            <div className={splitLocation[1] === "user" ? "active" : ""} >
            <Link className="sidebar__link" exact to="/user">
             <SidebarRow Icon={Person} title="User Profile" />
            </Link>
            </div>
            <SidebarRow Icon={AssignmentOutlined} title="Table List" />
            <SidebarRow Icon={LibraryBooksSharp} title="Typography" />
            <SidebarRow  Icon={Apps} title="Icons" />
            <SidebarRow   Icon ={LocationOn} title="Maps" />
            <SidebarRow   Icon ={Notifications} title="Notifications" />
            <SidebarRow   Icon ={LanguageSharp} title="RTL Support" />
            </div>
            <div className="sidebar__bottom">
            
            <SidebarRow  className="sidebarRow__active" Icon ={ArrowCircleUpSharp} title="Ugrade To PRO" />
           
            </div>
        </div>
    )
}

export default Sidebar;
