import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import InstrumentsPage from './pages/Instruments';
import InstrumentPage from './pages/InstrumentPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/categories',
      element: <CategoriesPage />,
    },
    {
      path: '/instruments',
      element: <InstrumentsPage />,
    },
    {
      path: '/instrument/:id',
      element: <InstrumentPage />,
    },
    {
      path: '*',
      element: <Navigate to="/home" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
