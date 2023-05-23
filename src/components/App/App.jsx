import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Registration = lazy(() => import('../../pages/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};
