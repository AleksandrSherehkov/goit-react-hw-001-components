import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section>
      <div>{title && <h2>{title}</h2>}</div>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
