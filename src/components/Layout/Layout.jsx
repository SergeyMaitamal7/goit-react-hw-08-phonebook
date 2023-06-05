import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Container,
} from '@mui/material';
import Header from 'components/Header/Header.jsx';

export default function Layoyt() {
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Header />
        </Container>
      </AppBar>
      <Suspense fallback={<p>Загружаем...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
