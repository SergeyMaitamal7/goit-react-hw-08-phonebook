import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/authOperations';
import { IsRefreshing } from 'redux/auth/authSelectors';

import PrivateRoute from 'components/PrivetRoute';
import RestrictedRoute from 'components/RestrictedRoute ';

const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Login = lazy(() => import('../../pages/Login'));
const Registration = lazy(() => import('../../pages/Registaration'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(IsRefreshing);
  console.log(isRefresh);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
           <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
 
      </Route>
    </Routes>
  );
};
