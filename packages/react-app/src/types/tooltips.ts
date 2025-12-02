import { IGameResult } from './types'

export enum TooltipPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export enum TooltipType {
  SIMPLE = 'SIMPLE',
  GAME = 'GAME',
}

export interface ITooltipCommonProps {
  rect: DOMRect
  position: TooltipPosition
  hoverTooltip?: boolean
}

export type TTooltipCustomPropsProps =
  | { type: TooltipType.SIMPLE; message: string }
  | { type: TooltipType.GAME; gameResult: IGameResult }

export interface ITooltipProps {
  common: ITooltipCommonProps
  custom: TTooltipCustomPropsProps
}
