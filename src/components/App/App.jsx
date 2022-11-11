import { lazy, Suspense } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import s from './App.module.css';

const HomePage = lazy(() => import('../HomePage/HomePage'));
const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div className={s.container}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/movies"
        >
          Movies
        </NavLink>
        <hr />
      </nav>
      <Suspense fallback="loading">
        <Routes>
                 <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MoviesPage />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Suspense>
    </div>
  );
};
