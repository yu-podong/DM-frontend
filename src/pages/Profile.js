import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
        <p>
            <strong>ID:</strong> {currentUser.userid}
        </p>
        <p>
            <strong>Email:</strong> {currentUser.email}
        </p>
            <strong>Authorities:</strong>
        <ul>
            {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
    </div>
  );
};

export default Profile;
