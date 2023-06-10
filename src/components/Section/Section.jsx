import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box
      m="50px auto"
      py={5}
      width="700px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      borderRadius="normal"
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
