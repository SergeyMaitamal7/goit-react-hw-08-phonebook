import styled from 'styled-components';
import background from '../../images/book.jpg';
import { Link } from 'react-router-dom';

export const AboutLink = styled(Link)``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  background-image: linear-gradient(
      to right,
      rgba(44, 55, 56, 0.5),
      rgba(44, 55, 56, 0.5)
    ),
    url(${background});
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 600px;
  font-size: 30px;
  text-align: center;
  color: aqua;
  padding-top: 200px;
  margin-bottom: 100px;
`;

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
