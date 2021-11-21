import { Dashboard, Notifications, Person, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import './Header.css';

function Header({title}) {
    return (
        <div className="header">
            <div className="header__common">

              <h3>{title}</h3> 
               <div className="header__Right">
                 <input 
                 placeholder="Search" />
                   <SearchOutlined className="searchIcon" />
                   <Dashboard />
                   <Notifications />
                   <Person />
                 </div>
             </div>
        </div>
    )
}

export default Header;
