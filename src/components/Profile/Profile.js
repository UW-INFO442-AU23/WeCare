import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref as databaseRef, onValue } from 'firebase/database';
import { NavLink } from 'react-router-dom';
import { useCharityContext } from '../CharityCat';


import { auth, realtimedb } from '../../f-config';
import './style.css'; 

const Profile = () => {
  console.log('Profile component rendering...');
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({
    photoURL: 'default-profile-picture.jpg',
    displayName: '',
    pronouns: '',
    address: '',
  });

  const { savedCharities, addSavedCharity, setSavedCharities} = useCharityContext();
  console.log('Saved Charities:', savedCharities);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);

        // Fetch user details from Realtime Database
        const userRef = databaseRef(realtimedb, `users/${authUser.uid}`);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setProfileData({
              photoURL: data.photoURL || 'default-profile-picture.jpg',
              displayName: data.displayName || '',
              pronouns: data.pronouns || '',
              address: data.address || '',
            });
          }
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logout successful!');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const handleUnsave = (charity) => {
    console.log('Attempting to unsave:', charity);
    const updatedCharities = savedCharities.filter((savedCharity) => savedCharity.charity !== charity.charity);
    console.log('Updated savedCharities:', updatedCharities);
    setSavedCharities(updatedCharities);
    // Optionally, update the localStorage if you're using it
    localStorage.setItem('savedCharities', JSON.stringify(updatedCharities));
  };




  return (
    <div id="container-bg">
      <main className="profile-container" >
        <section className="profile-section" class="text-center">
          <div className="profile-content" class="text-center">
            {user ? (
              <>
                <div className="profile-header" >
                  <div className="profile-photo" >
                    <img
                      className="rounded"
                      src={profileData.photoURL}
                      alt="User Profile"
                    />
                  </div>
                  <div className="profile-details" >
                    <h2>Profile</h2>
                    <p className="welcome-text">Welcome, {profileData.displayName || user.email}!</p>
                    <div className="profile-fields">
                      <p>Name: {profileData.displayName}</p>
                      <p>Pronouns: {profileData.pronouns}</p>
                      <p>Address: {profileData.address}</p>
                    </div>
                    <div className="saved-charities">
                      <h3>Saved Charities</h3>
                      <ul>
                        {/* {savedCharities.map((charity) => (
                      <li key={charity.charity}>
                        <a href={charity.link}>{charity.charity}</a>
                      </li>
                    ))} */}
                        {savedCharities.map((charity) => (
                          <li key={charity.charity}>
                            <a href={charity.link}>{charity.charity}</a>
                            <button onClick={() => handleUnsave(charity)}>Unsave</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
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
    </div>
  );
};

export default Profile;
