import styled from 'styled-components'

export const Loading = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid transparent;

  border-top-color: ${({ theme }) => theme.colors.info.default};
  animation: spin infinite 0.5s;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
`
