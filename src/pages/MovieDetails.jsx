import { useEffect, useRef, useState } from 'react';
import {
  Outlet,
  useNavigate,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
import { Suspense } from 'react';
import css from './ModuleDetails.module.css';

const MovieDetails = () => {
  const [films, setFilms] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const locationDetails = useLocation();
  const navigate = useNavigate();
  const backLinkLocationRef = useRef(locationDetails.state ?? '/movies');
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=487f22e4948534aa04d1bc1da1e0a7b4&language=en-US`
    )
      .then(res => res.json())
      .then(film => setFilms(film))
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  const hendleClick = () => navigate(backLinkLocationRef.current);

  return (
    <main>
      <button
        to={backLinkLocationRef.current}
        onClick={hendleClick}
        className={css.Btn}
      >
        Back
      </button>
      {error && <h1>{error.message}</h1>}
      {films && (
        <div>
          <div className={css.Info}>
            <div>
              <img
                className={css.Img}
                src={
                  films.poster_path ? BASE_URL + films.poster_path : films.image
                }
                alt={films.title}
              />
            </div>
            <div>
              <ul>
                <li className={css.DetalsItem}>
                  <h1>{films.title}</h1>
                </li>
                <li className={css.DetalsItem}>
                  <h2>Overview</h2>
                  <p>{films.overview}</p>
                </li>
                <li className={css.DetalsItem}>
                  <h2>Genres</h2>
                  <ul className={css.Genres}>
                    {films.genres.map(({ name }) => (
                      <li key={name} className={css.Films}>
                        {name}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={css.DetalsItem}>
                  <h2>Release date</h2>
                  <p>{films.release_date}</p>
                </li>
              </ul>
            </div>
          </div>
          <h3 className={css.Inform}>Additional information</h3>
          <ul className={css.InformList}>
            <li>
              <Link to="cast" className={css.InformItem}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={css.InformItem}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </main>
  );
};
export default MovieDetails;
