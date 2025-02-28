import { useTheme } from '@/shared/contexts'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { darken, lighten, transparentize } from 'polished'
import type { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const SelectTrigger = styled(Select.Trigger)`
  display: inline-flex;
  height: 35px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 4px;
  background: ${({ theme }) => (theme.title === 'light' ? theme.colors.light : theme.colors.dark)};
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => (theme.title === 'light' ? theme.colors.dark : theme.colors.light)};
  box-shadow: 0 2px 10px ${({ theme }) => transparentize(0.8, theme.colors.dark)};
  outline: none;
  &:hover {
  background: ${({ theme }) => (theme.title === 'light' ? darken(0.2, theme.colors.light) : lighten(0.2, theme.colors.dark))};

  }
  &:focus {
    box-shadow: 0 0 0 2px ${props => darken(0.2, props.theme.colors.background)};
  }
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  border-radius: 6px;
  background: ${({ theme }) => (theme.title === 'light' ? theme.colors.light : theme.colors.dark)};
`

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`

export const SelectLabel = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => {
    const manipulate = theme.title === 'dark' ? lighten : darken

    return manipulate(0.2, theme.colors.foreground)
  }};
`

export const SelectSeparator = styled(Select.Separator)`
  margin: 5px;
  height: 1px;
  background: ${({ theme }) => theme.colors.info.light};
`

const StyledItem = styled(Select.Item)`
  position: relative;
  display: flex;
  height: 25px;
  align-items: center;
  border-radius: 3px;
  padding-left: 25px;
  padding-right: 35px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary.default};
  user-select: none;
  &[data-disabled] {
    pointer-events: none;
    color: #a1a1aa;
  }
  &[data-highlighted] {
    background: ${({ theme }) => theme.colors.primary.light};
    color: white;
    outline: none;
  }
`

const StyledIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  display: inline-flex;
  width: 25px;
  align-items: center;
  justify-content: center;
`

export const SelectRoot = Select.Root
export const SelectValue = Select.Value
export const SelectIcon = Select.Icon
export const SelectPortal = Select.Portal
export const SelectScrollUp = Select.ScrollUpButton
export const SelectScrollDown = Select.ScrollDownButton

export const SelectItem = ({ children, value }: PropsWithChildren<{ value: string }>) => {
  const { theme } = useTheme()
  return (
    <StyledItem value={value}>
      <Select.ItemText style={{ color: theme.colors.background }}>{children}</Select.ItemText>
      <StyledIndicator>
        <Check size={theme.spacing[4]} />
      </StyledIndicator>
    </StyledItem>
  )
}
