import { Container, Title, AboutLink, Box } from './About.styled';
import { Button } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Title>Welcome to contact book</Title>
      <Box>
        <AboutLink to="/login">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Lets'go
          </Button>
        </AboutLink>
      </Box>
    </Container>
  );
}
