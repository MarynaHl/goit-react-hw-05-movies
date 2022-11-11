import { lazy, Suspense } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
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
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
