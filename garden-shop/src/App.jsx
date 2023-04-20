import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import GardenProvider from './context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <GardenProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </GardenProvider>
  );
}

export default App;
