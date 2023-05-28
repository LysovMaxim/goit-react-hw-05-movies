import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesRender.module.css';

const MovieRender = ({ films }) => {
  const locatioRender = useLocation();
  return (
    <>
      {
        <ul>
          {films.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={locatioRender} className={css.HomeLink}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
export default MovieRender;

MovieRender.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
