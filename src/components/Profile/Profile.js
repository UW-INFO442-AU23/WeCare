import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref as databaseRef, onValue, get, remove } from 'firebase/database';
import { NavLink } from 'react-router-dom';
import { auth, realtimedb } from '../../f-config';
import './style.css';

const sanitizeCharityNameForFirebaseKey = (name) => {
  return name.replace(/^\d+\.\s+/, '').replace(/[.#$[\]]/g, '');
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({
    photoURL: 'default-profile-picture.jpg',
    displayName: '',
    pronouns: '',
    address: '',
  });
  const [savedCharities, setSavedCharities] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);

        // Fetch user details
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
            if (data.savedCharities) {
              setSavedCharities(Object.values(data.savedCharities));
            }
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

  const displayCharityName = (name) => {
    return sanitizeCharityNameForFirebaseKey(name);
  };

  const handleUnsaveCharity = (charityName) => {
    const userId = auth.currentUser.uid;
    const sanitizedCharityName = sanitizeCharityNameForFirebaseKey(charityName);
    const charityRef = databaseRef(realtimedb, `users/${userId}/savedCharities/${sanitizedCharityName}`);

    remove(charityRef)
      .then(() => {
        console.log(`${charityName} unsaved successfully`);
        setSavedCharities(prevCharities => prevCharities.filter(charity => charity.charity !== charityName));
      })
      .catch(error => console.error('Error unsaving charity:', error));
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
                          {savedCharities.map((charity, index) => (
                            // probably needs to put into css file
                            <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <a href={charity.link} target="_blank" rel="noopener noreferrer">
                                {displayCharityName(charity.charity)}
                              </a>
                              <button onClick={() => handleUnsaveCharity(charity.charity)} style={{ marginLeft: '10px' }}>
                                Unsave
                              </button>
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