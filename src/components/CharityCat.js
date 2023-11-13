// import React, { createContext, useContext, useState } from 'react';

// // Create a context for managing charity-related state
// const CharityContext = createContext();

// // Create a provider component for the CharityContext
// export const CharityProvider = ({ children }) => {
//   // State to keep track of saved charities
//   const [savedCharities, setSavedCharities] = useState([]);

//   // Function to add a charity to the savedCharities array
//   const addSavedCharity = (charity) => {
//     console.log('Attempting to save:', charity);
//     // Update the savedCharities array using the previous state
//     setSavedCharities((prevCharities) => {
//       const newCharities = [...prevCharities, charity];
//       console.log('Updated savedCharities:', newCharities);
//       return newCharities;
//     });
//   };

//   // Log information when the CharityProvider is rendered
//   console.log('CharityProvider Rendered! Saved Charities:', savedCharities);

//   // Provide the savedCharities array and addSavedCharity function to its children
//   return (
//     <CharityContext.Provider value={{ savedCharities, addSavedCharity }}>
//       {children}
//     </CharityContext.Provider>
//   );
// };

// // Create a hook to easily access the CharityContext values
// export const useCharityContext = () => {
//   return useContext(CharityContext);
// };


// In CharityCat.js

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

  
