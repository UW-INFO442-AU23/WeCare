// PACKAGES
import React from 'react';

// TODO: Break into subcomps

export function UserInfo(props) {
  const { name, pronouns, address } = props;

  return (
    <div className="tight-box column">
      <div className="box text-center">
        <p className="fs-4 fw-bold align-middle mb-0">{name}</p>
        <p className="fs-4 fw-light align-middle text-secondary mb-0">{pronouns}</p>
        <p className="fs-4 fw-light align-middle text-secondary mb-0">{address}</p>
      </div>

     

      <br />
    </div>
  )
}
export default UserInfo;