import React, { useState, useEffect, useContext } from 'react';
import { ref as databaseRef, get, set as databaseSet, onValue } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { realtimedb, storage } from '../../f-config';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const Edit = () => {
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({ firstName: '', pronouns: '', address: '' });
  const [currentPhotoURL, setCurrentPhotoURL] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const userRef = databaseRef(realtimedb, `users/${user.uid}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFormData({
            firstName: data.displayName || '',
            pronouns: data.pronouns || '',
            address: data.address || '',
          });
          setCurrentPhotoURL(data.photoURL || null);
          setDisplayedImage(data.photoURL || null);
        }
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Only JPG and PNG files are allowed.');
        e.target.value = '';
        return;
      }

    const maxSize = 5 * 1024 * 1024; // 5mb max
    if (file.size > maxSize) {
      alert('File size exceeds the limit.');
      return;
    }

    setImage(file);

    const fileReader = new FileReader();
    fileReader.onload = (e) => setDisplayedImage(e.target.result);
    fileReader.readAsDataURL(file);

    } else {
      setDisplayedImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = databaseRef(realtimedb, `users/${user.uid}`);

      // Fetch current user data
      const snapshot = await get(userRef);
      const currentUserData = snapshot.val() || {};

      const updates = {
        ...currentUserData, // Include all existing data
        displayName: formData.firstName,
        pronouns: formData.pronouns,
        address: formData.address,
      };

      if (image) {
        const imageRef = storageRef(storage, `profile-images/${user.uid}`);
        const uploadResult = await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(uploadResult.ref);
        updates.photoURL = imageUrl;
      } else {
        updates.photoURL = currentPhotoURL;
      }

      // Update user data in Firebase
      await databaseSet(userRef, updates);
      console.log('Profile updated successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id="container-bg">
      <h1 className="text-center py-5">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-5">
          <label>First and Last Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder= "e.g. Jennifer Coolidge"/>
        </div>
        <div className="mx-5">
          <label>Pronouns:</label>
          <input type="text" name="pronouns" value={formData.pronouns} onChange={handleChange} placeholder= "e.g. she/her, he/him, they/them"/>
        </div>
        <div className="mx-5">
          <label>City:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder= "e.g. Seattle"/>
        </div>
        <div className="mx-5">
          <label>Profile Picture:</label>
          <input type="file" onChange={handleImageChange} />
          <p>Please upload a JPG or PNG file.</p>
          {displayedImage && <img src={displayedImage} alt="Profile" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        </div>
        <button className="btn btn-outline-secondary mx-5" type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Edit;