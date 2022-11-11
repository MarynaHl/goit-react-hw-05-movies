import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = async () => {
      setLoading(true);
      try {
        const actors = await api.fetchActors(movieId);
        setActors(actors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              width="200px"
              src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
              alt={actor.original_name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
