import React from 'react'
import { TooltipContext } from './tooltip'
import { useTooltipContext } from './tooltip/hook'

interface IProps {
  children: React.ReactNode
}

export default function ContextProvider({ children }: IProps) {
  const tooltipContextValue = useTooltipContext()

  return <TooltipContext.Provider value={tooltipContextValue}>{children}</TooltipContext.Provider>
}
