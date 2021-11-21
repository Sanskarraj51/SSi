import React from 'react';
import Header from './Header';
import "./User.css"

function User() {
    return (
        <div className="user">


           <Header title="User Profile" />
        
           
           <div className="user__bottom">
          
             
           <input className="user__input1" type="text" disabled
               placeholder="Company(disabled)" />
                <input className="user__input2" type="text"
               placeholder="Username" />
                <input className="user__input3" type="email"
               placeholder="Email address" />
                <input className="user__input4" type="text"
               placeholder="First Name" />
                <input className="user__input5" type="text"
               placeholder="Last Name" />
                <input className="user__input6" type="text"
               placeholder="City" />
                <input className="user__input7" type="text"
               placeholder="Country" />
                <input className="user__input8" type="text"
               placeholder="Postal Code" />
                <input className="user__input9" type="text"
               placeholder="About me" />
                  
                 <div>
                  <button type="submit" className="button" >UPDATE PROFILE</button>
                 </div>
              </div>
            <div className="user__top">
                <h2>Edit Profile</h2>
                <h4>Complete your profile</h4>
            </div>

        
    </div>
    )
}

export default User
