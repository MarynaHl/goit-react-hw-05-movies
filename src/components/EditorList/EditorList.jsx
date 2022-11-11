import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditorList = ({ films }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={`/goit-react-hw-05-movies/movies/${id}`}
        state={{
          location: useLocation().pathname,
          search: searchParams.get('query'),
        }}
      >
        {title}
      </Link>
    </li>
  );
}

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
