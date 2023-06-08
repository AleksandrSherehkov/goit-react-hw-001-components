import styled from 'styled-components';

export const Avatar = styled.img`
  width: 100px;
  height: 100px;

  border: ${({ theme }) => theme.borders.medium};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.round};
`;
