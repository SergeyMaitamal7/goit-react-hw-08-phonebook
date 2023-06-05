import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IsLoggedIn } from 'redux/auth/authSelectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(IsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
