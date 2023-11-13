import React, { createContext, useContext, useState, useEffect } from 'react';

const CharityContext = createContext();

export const CharityProvider = ({ children }) => {
  // When initializing the state
  const [savedCharities, setSavedCharities] = useState(() => {
    const storedCharities = localStorage.getItem('savedCharities');
    return storedCharities ? JSON.parse(storedCharities) : [];
  });

  // When updating the state
  const addSavedCharity = (charity) => {
    setSavedCharities((prevCharities) => {
      const newCharities = [...prevCharities, charity];
      localStorage.setItem('savedCharities', JSON.stringify(newCharities));
      return newCharities;
    });
  };

  // Log whenever the context provider is rendered
  console.log('CharityProvider Rendered! Saved Charities:', savedCharities);

  return (
    <CharityContext.Provider value={{ savedCharities, addSavedCharity }}>
      {children}
    </CharityContext.Provider>
  );
};

export const useCharityContext = () => {
  return useContext(CharityContext);
};


  