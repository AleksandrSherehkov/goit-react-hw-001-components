import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import statists from 'data/statists.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Section title="1 - Профіль соціальної мережі">
        <Profile {...user} />
      </Section>
      <Section title="2 - Секція статистики">
        <Statistics title="Upload stats" statists={statists} />
        <Statistics statists={statists} />
      </Section>
      <Section title="3 - Список друзів">
        <FriendList friends={friends} />
      </Section>
      <Section title="4 - Історія транзакцій">
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};
