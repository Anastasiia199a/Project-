import { createContext, useReducer } from 'react';
import { gardenReducer, initialState } from '../reducer/gardenReducer';

export const GardenContext = createContext({});

export default function GardenProvider({ children }) {
  const [state, dispatch] = useReducer(gardenReducer, initialState);

  return (
    <GardenContext.Provider value={[state, dispatch]}>
      {children}
    </GardenContext.Provider>
  );
}
