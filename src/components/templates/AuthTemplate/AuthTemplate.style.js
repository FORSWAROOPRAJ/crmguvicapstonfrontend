import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 60vh;
  padding: 4rem 3rem 3rem 3rem;
  background: ${({ theme }) => theme.colors.main};
`;

export const ImageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;

  svg {
    width: 40%;
    height: auto;
  }
`;

export const StyledLogo = styled.div`
  width: 80px;
  height: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  svg {
    height: 50%;
    width: 50%;
  }
`;
