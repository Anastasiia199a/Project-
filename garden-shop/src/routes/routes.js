import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import CategoriesPage from '../pages/CategoriesPage';
import InstrumentsPage from '../pages/Instruments';
import InstrumentPage from '../pages/InstrumentPage';
import Cart from '../pages/CartPage';

export const router = createBrowserRouter([
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
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <Navigate to="/home" replace />,
  },
]);
