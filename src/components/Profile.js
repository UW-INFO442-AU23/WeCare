import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./f-config";
import { useNavigate } from "react-router-dom";

function ProfileScreen(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(auth).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
            <h1>Profile</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}
export default ProfileScreen;

// import React from "react";
// import { useState } from "react";
// import {ref as storageRef, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
// import { storage, auth } from './f-config';

// import { updateProfile } from "firebase/auth";
// import { NavLink, Navigate } from "react-router-dom";
// import { Routes, Route, Router } from 'react-router-dom';


// export default function EditProfile(props) {
//   let user = props.user;
//   console.log(auth.currentUser);
//   console.log(user);

  
//   let name = '';
//   // let bio = '';
//   // let pronouns = '';

//   // console.log("P: " + user.photoURL);
//   // console.log(user);

//   const [imageUpload, setImageUpload] = useState(null);
//   const [userData, setUserData] = useState([]);



//   function handlePhoto(event) {
//     event.preventDefault();
//     const photo = event.target.files[0];
//     setImageUpload(photo);
//   }

//   function handleName(event) {
//     event.preventDefault();
//     name = event.target.value;
//     // let val;
//     if(name.length == 0) {
//         name = user.displayName;
//     } 
//   }

//   function handleBio(event) {
//     event.preventDefault();
//     let bio = event.target.value;
//     localStorage.setItem('bio', bio);
//   }

//   function handlePronouns(event) {
//     event.preventDefault();
//     let pronouns = event.target.value;
//     localStorage.setItem('pronouns', pronouns);
//   }

//   async function submitCallback(event) {
//     event.preventDefault();
//     //make sure image was added
//     if(imageUpload != null) {

//       //create reference to image in storage
//       const imageRef = storageRef(storage,`${imageUpload.name}`);
//       await uploadBytes(imageRef, imageUpload).then(() => {
//         //call reference to image and download firebase url to add to database
//         getDownloadURL(imageRef).then((url) => {
//           console.log(url);
//           // setImageUpload(url);

//           localStorage.setItem('userInfo', userData)

//           updateProfile(user, {
//             displayName: name,
//             photoURL: url,
//           }).then(() => {
//             console.log(user);
//             return (
//               <Navigate to='/my-profile'/>
//             )
//           }).catch((error) => {
//             console.log(error);
//           });
//         })
//     }) 

//     // console.log(user);
//   } else {
//     // localStorage.setItem('userInfo', userData)
//     console.log(localStorage.getItem('bio'));
//     console.log(localStorage.getItem('pronouns'));


//     updateProfile(user, {
//       displayName: name,
//     }).then(() => {

//     }).catch((error) => {
//       console.log(error);
//     });
//   }
// }


//     return (
//        <div className="container bootstrap snippets bootdey">
//           <h1 className="text">Edit Profile</h1>
//         <div className="row">

//             <div className="col-md-3">
//               <div>
//                 <h6>Upload a different photo...</h6>
//                 <input onBlur={handlePhoto} type="file" className="form-control"/>
//               </div>
//             </div>

//             <div className="col-md-9 personal-info">
//               {/* <div className="alert alert-info alert-dismissable">
//                 <a className="panel-close close" data-dismiss="alert">×</a> 
//                 <i className="fa fa-coffee"></i>
//               </div> */}
//               {/* <h3>Personal info</h3> */}
//               {/* <div onClick={() => changeToFalse()}>Go Back</div> */}
              
//               <form className="form-horizontal" role="form">
//                 <div className="form-group">
//                   <label className="col-lg-3 control-label">First name:</label>
//                   <div className="col-lg-8">
//                     <input onBlur={handleName} className="form-control" type="text" placeholder={user.displayName}/>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label className="col-lg-3 control-label">Bio</label>
//                   <div className="col-lg-8">
//                     <textarea onBlur={handleBio} className="form-control" type="text" placeholder="Tell us a little about yourself!"/>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label className="col-lg-3 control-label">Pronouns:</label>
//                   <div className="col-lg-8">
//                     <input onBlur={handlePronouns} className="form-control" type="text"/>
//                   </div>
//                 </div>
//                 {/* <div className="form-group">
//                   <label className="col-lg-3 control-label">Email:</label>
//                   <div className="col-lg-8">
//                     <input className="form-control" type="text" value="janesemail@gmail.com"/>
//                   </div>
//                 </div> */}
//                 <NavLink to="/user-profile">
//                   <button onClick={submitCallback} className="btn btn-save list-btn">Save</button>
//                 </NavLink>
                
//               </form>
//             </div>
//         </div>
//       </div>
//     )
// }