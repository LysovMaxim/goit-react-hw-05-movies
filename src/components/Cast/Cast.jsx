import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=487f22e4948534aa04d1bc1da1e0a7b4&language=en-US`
    )
      .then(res => res.json())
      .then(cast => setCast(cast.cast))
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul>
        {cast &&
          cast.map(actor => (
            <li key={actor.id} className={css.ActorItem}>
              <img
                className={css.Img}
                src={
                  actor.profile_path
                    ? BASE_URL + actor.profile_path
                    : actor.image
                }
                alt={actor.title}
              />
              <p>{actor.name}</p>
              <p>Сharacter: {actor.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Cast;
