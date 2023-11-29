import React, { useEffect, useState, useContext } from 'react';
import { signOut } from 'firebase/auth';
import { ref as databaseRef, onValue, remove } from 'firebase/database';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { auth, realtimedb } from '../../f-config';

const sanitizeCharityNameForFirebaseKey = (name) => {
  return name.replace(/^\d+\.\s+/, '').replace(/[.#$[\]]/g, '');
};

const Profile = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    photoURL: '../../img/defaultprofile.jpg',
    displayName: '',
    pronouns: '',
    address: '',
  });
  const [savedCharities, setSavedCharities] = useState([]);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setIsProfileLoading(true); // Start loading when fetching user data
      const userRef = databaseRef(realtimedb, `users/${user.uid}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setProfileData({
            photoURL: data.photoURL || '../../img/defaultprofile.jpg',
            displayName: data.displayName || '',
            pronouns: data.pronouns || '',
            address: data.address || '',
          });
          setSavedCharities(data.savedCharities ? Object.values(data.savedCharities) : []);
        }
        setIsProfileLoading(false); // Stop loading after data is fetched
      });
    } else {
      setProfileData(null); // Reset profile data if no user
      setIsProfileLoading(false);
    }
  }, [user]);

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

  const isDataLoading = isLoading || isProfileLoading;

  if (isDataLoading) {
    return <div>Loading profile...</div>;
  }

  if (!user) {
    return <p>You are not logged in. Please log in to view your profile.</p>;
  }

  return (
    <div id="container-bg">
      <div className="overallprofile">
      <div className="profile-container">
        <section className="profile-section">
          <div className="profile-content">
            {user ? (
              <>
                <div className="profile-header">
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
                      <p>City: {profileData.address}</p>
                    </div>
                    <div className="saved-charities">
                      <h3>Saved Charities</h3>
                        <ul>
                          {savedCharities.map((charity, index) => (
                            <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <a href={charity.link} target="_blank" rel="noopener noreferrer">
                                {displayCharityName(charity.charity)}
                              </a>
                              <button onClick={() => handleUnsaveCharity(charity.charity)} style={{ marginLeft: '10px' }} className="btn btn-outline-secondary my-3">
                                Unsave
                              </button>
                            </li>
                          ))}
                        </ul>
                    </div>
                  </div>
                </div>
                <div className="text-center edlogbtn">
                <button className="btn btn-outline-danger logout-button" onClick={handleLogout}>
                  Logout
                </button>
                <NavLink to="/edit" className="btn btn-outline-primary edit-button">
                  Edit
                </NavLink>
                </div>
              </>
            ) : (
              <p>You are not logged in. Please log in to view your profile.</p>
            )}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Profile;
