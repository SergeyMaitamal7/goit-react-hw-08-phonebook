import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const RegisterLink = styled(NavLink)`
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 97px;
  height: 45px;
  background: #3792de;
  border-radius: 30px;
  color: #ffffff;
`;

export const LoginLink = styled(NavLink)`
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 97px;
  height: 45px;
  border: 1px solid;
  border-color: rgba(30, 30, 30, 0.2);
  background: #ffffff;
  border-radius: 30px;
`;