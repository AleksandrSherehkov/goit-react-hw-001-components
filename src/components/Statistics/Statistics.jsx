import PropTypes from 'prop-types';
import { Box } from 'Utilities/Styled/Box';
import { Text } from 'Utilities/Styled/Text';
import { randomHexColor } from 'assets/randomColor';

export const Statistics = ({ title, statists }) => {
  return (
    <Box mt={5} width="400px" flexDirection="column" boxShadow="normal" bg="background">
      {title && (
        <Text mb={5} mt={5} fontWeight="bold" as="h2">
          {title}
        </Text>
      )}

      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="none"
        as="ul"
      >
        {statists.map(({ id, label, percentage }) => {
          return (
            <Box
              p={4}
              width="100%"
              flexDirection="column"
              gridGap={3}
              bg={randomHexColor()}
              borderRadius="none"
              as="li"
              key={id}
            >
              <Text fontSize="s" color="white" as="span">
                {label}
              </Text>
              <Text fontSize="24px" color="white" as="span">
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
