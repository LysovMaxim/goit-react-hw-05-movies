import MovieRender from '../MovieRender/MovieRender';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Form.module.css';

const Form = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmname = searchParams.get('qurey');

  const hendleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ qurey: form.elements.qurey.value });
  };

  useEffect(() => {
    if (!filmname) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=
${filmname}&api_key=487f22e4948534aa04d1bc1da1e0a7b4`
    )
      .then(res => res.json())
      .then(films => {
        setFilms(films.results);
      })
      .catch(error => {
        setError(error);
      });
  }, [filmname]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <form onSubmit={hendleSubmit} className={css.Form}>
        <input
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movies name"
          name="qurey"
          defaultValue={filmname}
        />
        <button type="submit" className={css.Btn}>
          <span className="button-label">Search</span>
        </button>
      </form>
      <MovieRender films={films} />
    </>
  );
};
export default Form;
