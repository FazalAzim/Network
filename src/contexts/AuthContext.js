import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log("Current User ===>>", currentUser)

  // Simulate a login function
  const login = (email, password) => {
    // Here you would authenticate against your backend
    const user = { id: '123', email };
    setCurrentUser(true);
    setLoading(false);
  };

  // Simulate a logout function
  const logout = () => {
    setCurrentUser(false);
  };

  useEffect(() => {
    // Check for current user on mount, for now, we'll just setLoading to false
    setLoading(false);
  }, []);

  // The value that will be supplied to all components using this context
  const value = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
