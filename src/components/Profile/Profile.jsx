import PropTypes from 'prop-types';
import defaultimg from 'assets/img/defaultimg.jpg';
import { Avatar } from 'components/Profile/Profile.styled';
import { Box } from 'components/Box';
import { Text } from 'components/Text';

export const Profile = ({
  username = 'User Name',
  tag,
  location,
  avatar = defaultimg,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      mt={4}
      pt={5}
      width="250px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="normal"
      boxShadow="normal"
      bg="background"
    >
      <Box display="flex" flexDirection="column" alignItems="center" gridGap={4}>
        <Avatar src={avatar ?? defaultimg} alt="User avatar" />
        <Text fontWeight="bold" color="black">
          {username}
        </Text>
        <Text fontWeight="normal" color="text">
          @{tag}
        </Text>
        <Text fontWeight="normal" color="text">
          {location}
        </Text>
      </Box>

      <Box
        mt={5}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderTop="medium"
        borderTopColor="primary"
        bg="secondary"
        as="ul"
      >
        <Box
          p={4}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gridGap={3}
          borderRight="medium"
          borderRightColor="primary"
          as="li"
        >
          <Text fontWeight="normal" fontSize="xs" color="text" as="span">
            Followers
          </Text>
          <Text fontWeight="bold" color="black">
            {followers}
          </Text>
        </Box>
        <Box
          p={4}
          width="100%"
          display="flex"
          gridGap={3}
          flexDirection="column"
          alignItems="center"
          borderRight="medium"
          borderRightColor="primary"
          as="li"
        >
          <Text fontWeight="normal" fontSize="xs" color="text" as="span">
            Views
          </Text>
          <Text fontWeight="bold" color="black">
            {views}
          </Text>
        </Box>
        <Box
          p={4}
          width="100%"
          display="flex"
          gridGap={3}
          flexDirection="column"
          alignItems="center"
          as="li"
        >
          <Text fontWeight="normal" fontSize="xs" color="text" as="span">
            Likes
          </Text>
          <Text fontWeight="bold" color="black">
            {likes}
          </Text>
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
