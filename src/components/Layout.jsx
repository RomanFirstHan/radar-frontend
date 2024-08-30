import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from './hook/useAuth';
import React from 'react';

const setActve = ({isActive})=> isActive ? 'active-link' : 'header__link'




export function Layout() {
  const {role} = useAuth();
  return (
    <>
      <header className="header">
        <nav className='container'>
          <ul className='header__items'>
            { role && <li className='header__item'><NavLink className={setActve} to="/Auth">Выход</NavLink></li>}
            { !role && <li className='header__item'><NavLink className={setActve} to="/Auth">Авторизация</NavLink></li>}
            {role=='ADMIN' && <li className='header__item'><NavLink className={setActve} to="/Technology">Технологии</NavLink></li>}
            {role && <li className='header__item'><NavLink className={setActve} to="/Score">Оценка</NavLink></li>}
            {role && <li className='header__item'><NavLink className={setActve} to="/">Радар</NavLink></li>}
          </ul>
        </nav>
      </header>
      <Outlet />
      </>
  )
}
