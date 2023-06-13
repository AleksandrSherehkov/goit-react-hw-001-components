import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Text } from 'components/Text';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Box
      p={4}
      width="100%"
      gridGap={4}
      justifyContent="start"
      boxShadow="normal"
      bg="background"
      as="li"
    >
      <Box
        display="block"
        borderRadius="round"
        bg={isOnline ? 'sucses' : 'failed'}
        width="15px"
        height="15px"
        as="span"
      ></Box>
      <img src={avatar} alt="User avatar" width="48" />
      <Text fontSize="l">{name}</Text>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
