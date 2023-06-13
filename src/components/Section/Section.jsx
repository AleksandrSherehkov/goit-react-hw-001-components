import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box
      m="50px auto"
      py={5}
      width="700px"
      flexDirection="column"
      boxShadow="normal"
      bg="primary"
      as="section"
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
