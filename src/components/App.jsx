import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import user from 'data/user.json';
import statists from 'data/statists.json';

//import Profile from './Profile/Profile';
const { username, tag, location, avatar, stats } = user;

// Define what props.theme will look like

export const App = () => {
  return (
    <>
      <Section title="1 - Профіль соціальної мережі">
        <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      </Section>
      <Section title="2 - Секція статистики">
        <Statistics title="Upload stats" statists={statists} />
        <Statistics statists={statists} />
      </Section>
    </>
  );
};
