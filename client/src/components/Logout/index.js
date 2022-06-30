import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button class = "logOut" onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

export default Logout;