import { Div} from './Header.styled.';
import Navigations from 'components/Navigations/Navigations.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import Auth from 'components/Auth/Auth.jsx';
import { useSelector } from 'react-redux';
import { IsLoggedIn } from 'redux/auth/authSelectors';

export default function Header() {
  const isLoggedIn = useSelector(IsLoggedIn);
  return (
    <Div>
      <Navigations />
      {isLoggedIn ? <UserMenu /> : <Auth />}
    </Div>
  );
}
