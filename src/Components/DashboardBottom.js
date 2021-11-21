import React from 'react';
import './DashboardBottom.css'

function DashboardBottom({ src, title, description,Icon, Icon1 , timestamp }) {
    return (
        <div className="dashboard__Bottom">
            
           
           <div className="dashboard__box">
             <h2>{title}</h2> 
             <h4>
                 {Icon}
                 {description}</h4>

             <div className="dashboard__timestamp">
                 {Icon1}
                 <h4>{timestamp}</h4>
             </div>
           </div>
           <img 
           src={src}
           alt="graph"
           /> 
           
        </div>
    )
}

export default DashboardBottom
