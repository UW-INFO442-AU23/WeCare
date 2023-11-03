

// // Edit.js
// import React, { useState } from "react";
// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { updateProfile } from "firebase/auth";
// import { storage, auth } from "./f-config";
// import { NavLink, Navigate } from "react-router-dom";

// export default function Edit(props) {
//   const user = props.user || { displayName: '', address: '' };
//   const [imageUpload, setImageUpload] = useState(null);
//   const [name, setName] = useState(user.displayName || '');
//   const [address, setAddress] = useState(user.address || '');

//   function handlePhoto(event) {
//     event.preventDefault();
//     const photo = event.target.files[0];
//     setImageUpload(photo);
//   }

//   function handleName(event) {
//     event.preventDefault();
//     setName(event.target.value);
//   }

//   function handleAddress(event) {
//     event.preventDefault();
//     setAddress(event.target.value);
//   }

//   async function submitCallback(event) {
//     event.preventDefault();

//     const currentUser = auth.currentUser;

//     if (currentUser && imageUpload !== null) {
//       const imageRef = storageRef(storage, `${imageUpload.name}`);
//       await uploadBytes(imageRef, imageUpload);

//       getDownloadURL(imageRef)
//         .then((url) => {
//           return updateProfile(currentUser, {
//             displayName: name,
//             photoURL: url,
//             address: address,
//           });
//         })
//         .then(() => {
//           console.log(currentUser);
//           // Redirect to the profile page after successful update
//           return <Navigate to="/profile" />;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       // If no image is uploaded, update profile without photoURL
//       updateProfile(currentUser, {
//         displayName: name,
//         address: address,
//       })
//         .then(() => {
//           console.log(currentUser);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }

//   return (
//     <div className="container bootstrap snippets bootdey">
//       <h1 className="text">Edit Profile</h1>
//       <div className="row">
//         <div className="col-md-3">
//           <div>
//             <h6>Upload a different photo...</h6>
//             <input onBlur={handlePhoto} type="file" className="form-control" />
//           </div>
//         </div>

//         <div className="col-md-9 personal-info">
//           <form className="form-horizontal" role="form">
//             <div className="form-group">
//               <label className="col-lg-3 control-label">First name:</label>
//               <div className="col-lg-8">
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder={user.displayName}
//                   value={name}
//                   onChange={handleName}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="col-lg-3 control-label">Address:</label>
//               <div className="col-lg-8">
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder={user.address || 'Not provided'}
//                   value={address}
//                   onChange={handleAddress}
//                 />
//               </div>
//             </div>

//             {/* Other form fields go here */}
//             <NavLink to="/profile">
//               <button onClick={submitCallback} className="btn btn-save list-btn">
//                 Save
//               </button>
//             </NavLink>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { updateProfile } from "firebase/auth";
// import { storage, auth } from "./f-config";
// import { NavLink, Navigate, useHistory } from "react-router-dom";

// export default function Edit(props) {
//   const user = props.user || { displayName: '', lastName: '', address: '' };
//   const [imageUpload, setImageUpload] = useState(null);
//   const [name, setName] = useState(user.displayName || '');
//   const [lastName, setLastName] = useState(user.lastName || '');
//   const [address, setAddress] = useState(user.address || '');

//   function handlePhoto(event) {
//     event.preventDefault();
//     const photo = event.target.files[0];
//     setImageUpload(photo);
//   }

//   function handleName(event) {
//     event.preventDefault();
//     setName(event.target.value);
//   }

// //   function handleName(event) {
// //     event.preventDefault();
// //     name = event.target.value;
// //     // let val;
// //     if(name.length == 0) {
// //         name = user.displayName;
// //     } 
// //   }
//   function handleLastName(event) {
//     event.preventDefault();
//     setLastName(event.target.value);
//   }

//   function handleAddress(event) {
//     event.preventDefault();
//     setAddress(event.target.value);
//   }



//   async function submitCallback(event) {
//     event.preventDefault();

//     const currentUser = auth.currentUser;

//     if (currentUser) {
//       try {
//         if (imageUpload !== null) {
//           const imageRef = storageRef(storage, `${imageUpload.name}`);
//           await uploadBytes(imageRef, imageUpload);

//           getDownloadURL(imageRef).then((url) => {
//             updateProfile(currentUser, {
//               displayName: name,
//               photoURL: url,
//               lastName: lastName,
//               address: address,
//             })
//               .then(() => {
//                 console.log('Profile updated with image:', currentUser);
//                 return <Navigate to="/profile" />;
//               })
//               .catch((error) => {
//                 console.log('Error updating profile with image:', error);
//               });
//           });
//         } else {
//           updateProfile(currentUser, {
//             displayName: name,
//             lastName: lastName,
//             address: address,
//           })
//             .then(() => {
//               console.log('Profile updated without image:', currentUser);
//             })
//             .catch((error) => {
//               console.log('Error updating profile without image:', error);
//             });
//         }
//       } catch (error) {
//         console.log('Error updating profile:', error);
//       }
//     }
//   }

//   return (
//     <div className="container bootstrap snippets bootdey">
//       <h1 className="text">Edit Profile</h1>
//       <div className="row">
//         <div className="col-md-3">
//           <div>
//             <h6>Upload a different photo...</h6>
//             <input onBlur={handlePhoto} type="file" className="form-control" />
//           </div>
//         </div>

//         <div className="col-md-9 personal-info">
//           <form className="form-horizontal" role="form">
//             <div className="form-group">
//               <label className="col-lg-3 control-label">First name:</label>
//               <div className="col-lg-8">
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder={user.displayName}
//                   value={name}
//                   onChange={handleName}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="col-lg-3 control-label">Last name:</label>
//               <div className="col-lg-8">
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder={user.lastName}
//                   value={lastName}
//                   onChange={handleLastName}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="col-lg-3 control-label">Address:</label>
//               <div className="col-lg-8">
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder={user.address || 'Not provided'}
//                   value={address}
//                   onChange={handleAddress}
//                 />
//               </div>
//             </div>

//             {/* Other form fields go here */}
//             <NavLink to="/profile">
//               <button onClick={submitCallback} className="btn btn-save list-btn">
//                 Save
//               </button>
//             </NavLink>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { storage, auth } from './f-config';  // Adjust this path based on your project structure

const Edit = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the current user when the component mounts
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setFirstName(currentUser.displayName || '');
    }
  }, []);

  const handleFirstLastNameChange = (e) => {
    setFirstName(e.target.value);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update first and last name
      await updateProfile(user, {
        displayName: firstName,
      });

      // Update profile picture if selected
      if (image) {
        const imageRef = storageRef(storage, `profile-images/${user.uid}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);

        await updateProfile(user, {
          photoURL: imageUrl,
        });
      }

      // Additional logic or redirection if needed
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First and Last Name:</label>
          <input type="text" value={firstName} onChange={handleFirstLastNameChange} />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Edit;
