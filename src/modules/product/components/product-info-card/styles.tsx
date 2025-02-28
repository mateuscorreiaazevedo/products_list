import { lighten } from 'polished'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => (props.theme.title === 'light' ? props.theme.colors.light : lighten(0.2, props.theme.colors.background))};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 20px;
  gap: 24px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`
