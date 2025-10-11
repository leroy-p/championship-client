import React, { useEffect } from 'react'
import { useI18n } from '../hooks/use-i18n'

export const APP_NAME = 'Cross The Aces'

interface IProps {
  children: React.ReactNode
  pageName?: string
}

export default function Page({ children, pageName }: IProps) {
  const { t, i18n } = useI18n()

  useEffect(() => {
    window.document.title = pageName ? `${pageName} - ${APP_NAME}` : APP_NAME
  }, [pageName, t, i18n.language])

  return children
}
