import Image from 'next/image'
import { darken } from 'polished'
import styled from 'styled-components'

export const ImageProduct = styled(Image)`
  width: 40%;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: 0px 2px 2px ${({ theme }) => darken(0.1, theme.colors.background)};
  object-fit: contain;
  background: #fff;

  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
  }
`
