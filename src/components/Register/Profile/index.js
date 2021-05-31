import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from './Styled.jsx';

const Profile = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  };

  return (
    isAuthenticated && (
      <User>
        <img src={user.picture} alt={user.name} />
      </User>
    )
  );
};

export default Profile;