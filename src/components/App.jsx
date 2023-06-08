import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Section/Section';
import user from 'data/user.json';
import { Box } from './Box';
//import Profile from './Profile/Profile';
const { username, tag, location, avatar, stats } = user;

// Define what props.theme will look like

export const App = () => {
  return (
    <Box bg="primary" width="700px" display="flex" justifyContent="center" alignItems="center">
      <Section title={'1 - Профіль соціальної мережі'}>
        <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      </Section>
    </Box>
  );
};

// display = 'flex';
// justifyContent = 'center';
// alignItems = 'center';
// height = '100vh';
