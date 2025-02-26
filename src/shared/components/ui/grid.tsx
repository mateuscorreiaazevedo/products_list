import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['5']};
  grid-template-columns: repeat(1, minmax(0, 1fr));
  
  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing['4']};
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  @media (min-width: 1024px) {
    gap: ${({ theme }) => theme.spacing['6']};
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`
