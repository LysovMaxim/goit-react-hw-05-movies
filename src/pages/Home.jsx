import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [allFilms, setAllFilms] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=487f22e4948534aa04d1bc1da1e0a7b4&language=en-US'
    )
      .then(res => res.json())
      .then(films => {
        setAllFilms(films.results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <h1 className={css.HomeTrending}>Trending today</h1>
      {
        <ul>
          {allFilms.map(({ title, id }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={location}
                className={css.HomeLink}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
export default Home;
