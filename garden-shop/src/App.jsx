import React from 'react';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
