import PropTypes from 'prop-types';
import { SectionLook } from './section.styled';

export default function Section({ title, children }) {
  return (
    <SectionLook>
      {title && <h2>{title}</h2>}
      {children}
    </SectionLook>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
