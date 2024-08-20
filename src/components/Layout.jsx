import { NavLink, Outlet } from 'react-router-dom';

const setActve = ({isActive})=> isActive ? 'active-link' : 'header__link'


export function Layout() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className='header__items'>
            <li className='header__item'><NavLink className={setActve} to="/Auth">Авторизация</NavLink></li>
            <li className='header__item'><NavLink className={setActve} to="/Technology">Технологии</NavLink></li>
            <li className='header__item'><NavLink className={setActve} to="/Score">Оценка</NavLink></li>
            <li className='header__item'><NavLink className={setActve} to="/">Радар</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
      </>
  )
}
