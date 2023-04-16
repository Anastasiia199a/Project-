import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import InstrumentsPage from './pages/Instruments';

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
      path: '*',
      element: <Navigate to="/home" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
