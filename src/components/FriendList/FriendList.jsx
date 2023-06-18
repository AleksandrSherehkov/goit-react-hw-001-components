import PropTypes from 'prop-types';
import { Box } from 'Utilities/Styled/Box';
import { FriendListItem } from './../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box mt={5} p={5} width="350px" gridGap={4} flexDirection="column" bg="background" as="ul">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />;
      })}
    </Box>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
