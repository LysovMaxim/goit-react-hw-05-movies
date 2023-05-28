import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.Header}>
      <ul className={css.HeaderList}>
        <li>
          <NavLink to="/" className={css.HeaderItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.HeaderItem}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
