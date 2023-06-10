import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;
