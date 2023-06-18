import PropTypes from 'prop-types';
import defaultimg from 'assets/img/defaultimg.jpg';
import { Avatar } from 'components/Profile/Profile.styled';
import { Box } from 'Utilities/Styled/Box';
import { Text } from 'Utilities/Styled/Text';

export const Profile = ({
  username = 'User Name',
  tag,
  location,
  avatar = defaultimg,
  stats: { followers, views, likes },
}) => {
  return (
    <Box mt={4} pt={5} width="250px" flexDirection="column" boxShadow="normal" bg="background">
      <Box display="flex" flexDirection="column" gridGap={4}>
        <Avatar src={avatar ?? defaultimg} alt="User avatar" />
        <Text fontWeight="bold">{username}</Text>
        <Text color="muted">@{tag}</Text>
        <Text color="muted">{location}</Text>
      </Box>

      <Box
        mt={5}
        width="100%"
        justifyContent="space-between"
        borderTop="medium"
        borderTopColor="border"
        bg="secondary"
        as="ul"
      >
        <Box
          p={4}
          width="100%"
          flexDirection="column"
          gridGap={3}
          borderRight="medium"
          borderRightColor="border"
          as="li"
        >
          <Text fontSize="xs" color="muted" as="span">
            Followers
          </Text>
          <Text fontWeight="bold">{followers}</Text>
        </Box>
        <Box
          p={4}
          width="100%"
          gridGap={3}
          flexDirection="column"
          borderRight="medium"
          borderRightColor="border"
          as="li"
        >
          <Text fontSize="xs" color="muted" as="span">
            Views
          </Text>
          <Text fontWeight="bold">{views}</Text>
        </Box>
        <Box p={4} width="100%" gridGap={3} flexDirection="column" as="li">
          <Text fontSize="xs" color="muted" as="span">
            Likes
          </Text>
          <Text fontWeight="bold">{likes}</Text>
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
