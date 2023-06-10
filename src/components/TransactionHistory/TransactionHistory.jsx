import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StyledTable } from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box
      mt={5}
      p={5}
      width="600px"
      display="flex"
      gridGap={4}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="normal"
      bg="background"
    >
      <StyledTable class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Box>
  );
};

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
