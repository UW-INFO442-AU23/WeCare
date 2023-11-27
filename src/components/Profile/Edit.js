import React, { useState, useEffect } from 'react';
import { ref as databaseRef, set as databaseSet, onValue } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, realtimedb, storage } from '../../f-config';

const Edit = () => {
  const [firstName, setFirstName] = useState('');
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);
  const [pronouns, setPronouns] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Fetch the current user when the component mounts
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);

      // Fetch user data from Realtime Database
      const userRef = databaseRef(realtimedb, `users/${currentUser.uid}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFirstName(data.displayName || '');
          setPronouns(data.pronouns || '');
          setAddress(data.address || '');
        }
      });
    }
  }, []);

  const handleFirstLastNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handlePronouns = (event) => {
    event.preventDefault();
    setPronouns(event.target.value);
  };

  const handleAddress = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update user data in Realtime Database
      const userRef = databaseRef(realtimedb, `users/${user.uid}`);
      databaseSet(userRef, {
        displayName: firstName,
        pronouns: pronouns,
        address: address,
      });

      // Handle image upload
      if (image) {
        const imageRef = storageRef(storage, `profile-images/${user.uid}`);
        await uploadBytes(imageRef, image).then(async () => {
          const imageUrl = await getDownloadURL(imageRef);
          databaseSet(databaseRef(realtimedb, `users/${user.uid}/photoURL`), imageUrl);
        });
      }

      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  return (
    <div id="container-bg">
      <h1 class="py-5">
          <div class="text-center">
            Edit profile
            </div>
        </h1>
      <form onSubmit={handleSubmit}>
        <div class="mx-5">
          <label>First and Last Name:</label>
          <input type="text" value={firstName} onChange={handleFirstLastNameChange} placeholder= "e.g. Jennifer Coolidge"/>
        </div>
        <div class="mx-5">
          <label>Pronouns:</label>
          <input type="text" value={pronouns} onChange={handlePronouns} placeholder= "e.g. she/her, he/him, they/them"/>
        </div>
        <div class="mx-5">
          <label>Address:</label>
          <input type="text" value={address} onChange={handleAddress} placeholder= "e.g. Seattle"/>
        </div>
        <div class="mx-5">
          <label>Profile Picture:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button className="btn btn-outline-secondary mx-5" type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Edit;

