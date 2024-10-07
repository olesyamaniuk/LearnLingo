import { Suspense } from 'react';
import css from './Layout.module.css';
// import Loader from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function Layout() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
          {/* <Suspense fallback={<Loader />}> */}
         <Suspense> 
        <Outlet />
      </Suspense>
    </div>
  );
}