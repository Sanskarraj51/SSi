import { ContentCopy, Warning ,DateRange, Store, Error, LocalOffer, Accessibility, Update,ArrowUpward, Schedule } from '@mui/icons-material';
import React from 'react';
import './Dashboard.css'
import DashboardBottom from './DashboardBottom';

import Header from './Header';

const style = { color: "red"}

function Dashboard() {
    return (
        <div className="dashboard">
            
            <Header title="Dashboard" />
              
              <div className="dashboard__top">
               <div className='dashboardInfo'>
               <div className="dashboard__large">
                <h3>Used Space</h3>
                <h1>49/50<span>GB</span></h1>
                <div className="dashboard__bottom">
                <Warning style={style} />
                <h4 style={{color:"violet"}}>
                Get more Space</h4>
                </div>
               </div>
                 <div className="dashboard__small">
                <ContentCopy/>
                </div>
                </div>

              <div className='dashboardInfo'>
               <div className="dashboard__large">
                <h3>Revenue</h3>
                <h1>$34,245</h1>
                <div className="dashboard__bottom">
                <DateRange />
                <h4>Last 24 Hours
                 </h4>
                </div>
            </div>
              <div className="dashboard__small" style={{backgroundColor:"rgb(93, 217, 130)"}} >
                <Store/>
              </div>
              
             </div>
              
             <div className='dashboardInfo'>
               <div className="dashboard__large">
                <h3>Fixed Issues</h3>
                <h1>75</h1>
                <div className="dashboard__bottom">
                <LocalOffer/>
                <h4>Last 24 Hours
                 </h4>
                </div>
            </div>
              <div className="dashboard__small" style={{backgroundColor:"rgb(245, 66, 90)"}} >
                <Error />
              </div>
              
             </div>
                  
             <div className='dashboardInfo'>
               <div className="dashboard__large">
                <h3>Followers</h3>
                <h1>+245</h1>
                <div className="dashboard__bottom">
                <Update />
                <h4>Just Updated
                 </h4>
                </div>
            </div>
              <div className="dashboard__small" style={{backgroundColor:"rgb(66, 212, 245)"}} >
                <Accessibility/>
              </div>
              
             </div>
             </div>


             <div className="dashboard__end">

               <DashboardBottom
                src="https://cdn-icons-png.flaticon.com/512/3121/3121768.png"
                title="Daily Sales"
                Icon={<ArrowUpward />}
                description="increase in today sales"
                Icon1={<Schedule />}
                timestamp="updated 4 minutes ago"
                />
                 <DashboardBottom
                src="https://cdn-icons-png.flaticon.com/512/3800/3800720.png"
                title="Email Subscriptions"
                
                description="Last Campaign Performance"
                Icon1={<Schedule />}
                timestamp="campaign sent 2 days ago"
                />
                 <DashboardBottom
                src="https://cdn-icons.flaticon.com/png/512/1376/premium/1376203.png?token=exp=1637516214~hmac=f23a525fbb0078be5946b42c80a97c93"
                title="Completed Tasks"
                
                description="Last Campaign Performance"
                Icon1={<Schedule />}
                timestamp="campaign sent 2 days ago"
                />


             </div>
        </div>
    )
}

export default Dashboard;
