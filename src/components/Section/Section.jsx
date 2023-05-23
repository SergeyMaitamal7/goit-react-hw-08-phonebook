import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
