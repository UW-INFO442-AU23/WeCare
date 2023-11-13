import React, { useState, useEffect } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { storage, auth } from '../../f-config';  // Adjust this path based on your project structure

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
      setFirstName(currentUser.displayName || '');
      setPronouns(currentUser.pronouns || '');
      setAddress(currentUser.address || '');

      
    }
  }, []);

  const handleFirstLastNameChange = (e) => {
    setFirstName(e.target.value);
  };

//   function handlePronouns(event) {
//     //event.preventDefault();
//     setPronouns(event.target.value);
//   }
function handlePronouns(event) {
    event.preventDefault();
    let pronounsValue = event.target.value;
    console.log('Setting pronouns:', pronounsValue);
    setPronouns(pronounsValue);
    localStorage.setItem('pronouns', pronounsValue);
  }
  

  function handleAddress(event) {
    event.preventDefault();
    let addressValue = event.target.value;
    console.log('Setting address:', addressValue);
    setAddress(addressValue);
    localStorage.setItem('address', addressValue);
  }


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
        pronouns: pronouns,
        address: address,

      });

      // Update profile picture if selected
      if (image) {
        const imageRef = storageRef(storage, `profile-images/${user.uid}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);

        await updateProfile(user, {
          photoURL: imageUrl,
          displayName: firstName,
        pronounsName: pronouns,
        addressName: address,
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
          <label>Pronounce:</label>
          <input type="text" value={pronouns} onChange={handlePronouns} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={handleAddress} />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" onChange={handleImageChange} />
        </div>

        <button className="btn btn-light" type="submit">Save Changes</button>
      </form>
    </div>
  );
};
export default Edit;

