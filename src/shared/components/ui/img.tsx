import Image from 'next/image'
import { lighten } from 'polished'
import styled from 'styled-components'

export const Img = styled(Image)`
  aspect-ratio: 1.2 / 1;
  border-radius: ${({ theme }) => theme.radius.lg};
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.background)};
`
