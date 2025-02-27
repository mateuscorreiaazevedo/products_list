import Image from 'next/image'
import { lighten } from 'polished'
import styled from 'styled-components'

export const Img = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.lg};
  width: 100%;
  height: 140px;
  object-fit: cover;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.background)};
  
  @media (min-width: 768px) {
    max-width: 240px;
    height: 200px;
  }
`
