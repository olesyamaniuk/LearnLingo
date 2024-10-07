import { NavLink } from 'react-router-dom';
import sprite from '../../pictures/symbol.svg';
// import sprite from '../../pictures/sprite.svg';
// import clsx from 'clsx';
import css from './Navigation.module.css';
import React from 'react';
// const NavigationClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function Navigation() {
  return (
      <div className={css.header}>
          <NavLink to="/" className={css.logo}>
                <svg width="28" height="28" className={css.icon}>
                  <use href={`${sprite}#icon-ukraine`}></use>
                </svg>    
              LearnLingo
         </NavLink>
       <nav className={css.nav}>
         <NavLink to="/" className={css.navLink}>
           Home
         </NavLink>
         <NavLink to="/teachers" className={css.navLink} >
           Teachers
         </NavLink>
          </nav>
          <div className={css.authLinks}>
              <NavLink to="/login" className={css.login}>
                    <svg width="20" height="20" className={css.icon}>
                  <use href={`${sprite}#icon-log-in-01`}></use>
                  </svg>
                  Log in</NavLink>
                <NavLink to="/register" className={css.register}>Registration</NavLink>
            </div>
     </div>
  );
}