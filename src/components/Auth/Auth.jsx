import { Container, RegisterLink, LoginLink } from './Auth.styled';

export default function Auth() {
  return (
    <Container>
      <RegisterLink to="registration">Registration</RegisterLink>
      <LoginLink to="login">Login</LoginLink>
    </Container>
  );
}
