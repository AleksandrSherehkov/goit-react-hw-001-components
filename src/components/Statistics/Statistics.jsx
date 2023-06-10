import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { randomHexColor } from 'assets/randomColor';

export const Statistics = ({ title, statists }) => {
  return (
    <Box
      mt={5}
      width="400px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="normal"
      boxShadow="normal"
      bg="background"
    >
      {title && (
        <Text mb={5} mt={5} fontWeight="bold" color="black" as="h2">
          {title}
        </Text>
      )}

      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" as="ul">
        {statists.map(({ id, label, percentage }) => {
          return (
            <Box
              p={4}
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gridGap={3}
              bg={randomHexColor()}
              as="li"
              key={id}
            >
              <Text fontWeight="normal" fontSize="s" color="white" as="span">
                {label}
              </Text>
              <Text fontWeight="normal" fontSize="24px" color="white" as="span">
                {percentage}%
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
