import { useState } from 'react'
import { ITooltipProps } from '../../types/tooltips'

export function useTooltipContext() {
  const [tooltipProps, setTooltipProps] = useState<ITooltipProps | undefined>(undefined)

  return { tooltipProps, setTooltipProps }
}
