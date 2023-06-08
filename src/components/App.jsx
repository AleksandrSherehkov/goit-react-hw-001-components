import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Section/Section';
import user from 'data/user.json';

//import Profile from './Profile/Profile';
const { username, tag, location, avatar, stats } = user;

// Define what props.theme will look like

export const App = () => {
  return (
    <>
      <Section title={'1 - Профіль соціальної мережі'}>
        <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      </Section>
    </>
  );
};
