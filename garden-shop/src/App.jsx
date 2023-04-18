import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import GardenProvider from './context/Context';

function App() {
  return (
    <GardenProvider>
      <RouterProvider router={router} />
    </GardenProvider>
  );
}

export default App;
