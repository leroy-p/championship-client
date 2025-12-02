import { createContext } from 'react'

import { useTooltipContext } from './hook'

export const tooltipContextDefaultValue: ReturnType<typeof useTooltipContext> = {
  tooltipProps: undefined,
  setTooltipProps: (_props) => undefined,
}

export const TooltipContext = createContext<ReturnType<typeof useTooltipContext>>(tooltipContextDefaultValue)
