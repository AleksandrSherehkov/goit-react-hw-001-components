import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 550px;

  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.normal};

  thead {
    border-radius: ${({ theme }) => theme.radii.normal};
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  tr {
    text-align: center;
    height: 45px;

    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  tr:nth-child(2n) {
    background: ${({ theme }) => theme.colors.primary};
  }
  td {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
