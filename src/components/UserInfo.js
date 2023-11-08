// PACKAGES
import React from 'react';

// TODO: Break into subcomps

export function UserInfo(props) {
  const { name, pronouns, address } = props;

  return (
    <div className="user-info-container">
      <div className="user-info-box text-center">
        <p className="user-info-text">First and Last Name: {name}</p>
        <p className="user-info-text">Pronouns: {pronouns}</p>
        <p className="user-info-text">City: {address}</p>
      </div>

      <br />
    </div>
  );
}

export default UserInfo;