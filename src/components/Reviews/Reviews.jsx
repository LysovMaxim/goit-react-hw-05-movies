import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=487f22e4948534aa04d1bc1da1e0a7b4&language=en-US`
    )
      .then(res => res.json())
      .then(reviews => setReviews(reviews.results))
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul>
        {reviews &&
          reviews.map(reviews => (
            <li key={reviews.id}>
              <h3>Author: {reviews.author}</h3>
              <p>{reviews.content}</p>
            </li>
          ))}
        {reviews.length === 0 && (
          <h3>We don`t have any reviews for this movie</h3>
        )}
      </ul>
    </>
  );
};
export default Reviews;
