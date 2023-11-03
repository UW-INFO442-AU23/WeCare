import React, { useState } from "react";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { storage, auth } from "./f-config";
import { NavLink, Navigate } from "react-router-dom";

export default function Edit(props) {
  const user = props.user || { displayName: '', address: '' };
  const [imageUpload, setImageUpload] = useState(null);
  const [name, setName] = useState(user.displayName || '');
  const [address, setAddress] = useState(user.address || '');

  function handlePhoto(event) {
    event.preventDefault();
    const photo = event.target.files[0];
    setImageUpload(photo);
  }

  function handleName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleAddress(event) {
    event.preventDefault();
    setAddress(event.target.value);
  }

  async function submitCallback(event) {
    event.preventDefault();

    if (imageUpload !== null) {
      const imageRef = storageRef(storage, `${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload);

      getDownloadURL(imageRef).then((url) => {
        updateProfile(user, {
          displayName: name,
          photoURL: url,
          address: address,
        })
          .then(() => {
            console.log(user);
            return <Navigate to="/profile" />;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      updateProfile(user, {
        displayName: name,
        address: address,
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
                  placeholder={user.displayName}
                  value={name}
                  onChange={handleName}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-lg-3 control-label">Address:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder={user.address || 'Not provided'}
                  value={address}
                  onChange={handleAddress}
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


