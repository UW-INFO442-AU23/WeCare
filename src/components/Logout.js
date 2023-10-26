/* // code for logout 


import { signOut, getAuth } from "firebase/auth";

import { useState } from "react";
import { auth } from "./f-config";
import logoutBTN from '../../assets/icon/enter.png';
import { Welcome } from "./welcome";
import { Button } from "@mui/material";
  
  export function HamburgerMenu(props) {

    // MDBIcon = logout;

    const logout = async () => {
        await signOut(auth);
        return <Profile/>
      };

    const [showNavExternal3, setShowNavExternal3] = useState(false);
  
//     return (
//       <>
//               {/* <MDBIcon fas icon='bars' /> */
//                <div className="col bottom-nav-icon">
//                 <div className="row top-nav">
//                   <Button onClick={logout}>  
//                     <img src={logoutBTN} alt='logout'/>
//                   </Button>
//                 </div>
//               </div>
//       </>
//     ); 
//   } */