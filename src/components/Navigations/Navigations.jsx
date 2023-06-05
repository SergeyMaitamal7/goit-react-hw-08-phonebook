import { Link } from './Navigations.styled';
import { useSelector } from 'react-redux';
import { IsLoggedIn } from 'redux/auth/authSelectors.js';

export default function Navigations() {
  const isLoggedIn = useSelector(IsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
}
