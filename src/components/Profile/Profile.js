// Profile.js
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserInfo } from '../UserInfo';

import { auth, db } from './f-config';
import './style.css'; // Import your CSS file for styling

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe from the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // You can navigate to a different page after logout if needed
      console.log('Logout successful!');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <>
      <main className="profile-container" id="container-bg">
        <section className="profile-section">
          <div className="profile-content">
            {user ? (
              <>
                <div className="profile-header">
                  <div className="profile-photo">
                    {/* Add logic to display user profile picture */}
                    <img
                      src={user.photoURL || 'default-profile-picture.jpg'}
                      alt="User Profile"
                    />
                  </div>
                  <div className="profile-details">
                    <h2>Profile</h2>
                    <p>Welcome, {user.email}!</p>
                    <div className="profile-fields">
                      {/* <div>
                        <label>First and Last Name:</label>
                        <p>{user.displayName || 'Not provided'}</p>
                      </div>
                      <div>
                    <label>Pronouns:</label>
                    <p>{user.pronouns || 'Not provided'}</p>
                  </div>
                  <div>
                    <label>Address:</label>
                    <p>{user.address || 'Not provided'}</p>
                  </div> */}
                  <UserInfo name={user.displayName} pronouns={localStorage.getItem('pronouns')}
                            address={localStorage.getItem('address')} />
                      
                    </div>
                  </div>
                </div>
                <button onClick={handleLogout}>Logout</button>
       
                <NavLink to="/edit" className="edit-button">
                  Edit
                </NavLink>
              </>
            ) : (
              <p>You are not logged in. Please log in to view your profile.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
