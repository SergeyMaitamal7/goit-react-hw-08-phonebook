import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Login = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;
export const SubmitForm = styled(Form)``;
export const Label = styled.label`
  display: block;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
`;
export const Input = styled(Field)`
  width: 425px;
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 440px;
  line-height: 0.6;
  gap: 10px;
`;
