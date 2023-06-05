import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IsRefreshing, IsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isRefresh = useSelector(IsRefreshing);
  const isLoggedIn = useSelector(IsLoggedIn);
  console.log(isRefresh);
  console.log(isLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefresh;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
