import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled.js';
import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu.jsx';

export default function SharedLayoyt() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </nav>
        <UserMenu />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
