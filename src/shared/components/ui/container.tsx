import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
  
  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing[10]};
  }
`
