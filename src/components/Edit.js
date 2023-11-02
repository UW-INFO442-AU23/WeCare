// EditProfile.js

import React, { useState } from "react";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { storage, auth } from "./f-config";
import { NavLink, Navigate } from "react-router-dom";

export default function Edit(props) {
  const user = props.user;
  const [imageUpload, setImageUpload] = useState(null);

  function handlePhoto(event) {
    event.preventDefault();
    const photo = event.target.files[0];
    setImageUpload(photo);
  }

  async function submitCallback(event) {
    event.preventDefault();

    if (imageUpload !== null) {
      const imageRef = storageRef(storage, `${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload);

      getDownloadURL(imageRef)
        .then((url) => {
          updateProfile(user, {
            displayName: user?.displayName, // Optional chaining to avoid undefined error
            photoURL: url,
          })
            .then(() => {
              console.log(user);
              return <Navigate to="/profile" />;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      updateProfile(user, {
        displayName: user?.displayName, // Optional chaining to avoid undefined error
      })
        .then(() => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="container bootstrap snippets bootdey">
      <h1 className="text">Edit Profile</h1>
      <div className="row">
        <div className="col-md-3">
          <div>
            <h6>Upload a different photo...</h6>
            <input onBlur={handlePhoto} type="file" className="form-control" />
          </div>
        </div>

        <div className="col-md-9 personal-info">
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label className="col-lg-3 control-label">First name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder={user?.displayName} // Optional chaining to avoid undefined error
                  readOnly
                />
              </div>
            </div>
            {/* Other form fields go here */}
            <NavLink to="/profile">
              <button onClick={submitCallback} className="btn btn-save list-btn">
                Save
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

