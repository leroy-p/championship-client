import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calendar from '../pages/calendar'
import NotFound from '../pages/error/not-found'
import Loading from '../pages/loading/loading'
import Player from '../pages/player'
import Ranking from '../pages/ranking'
import Root from '../pages/root'
import Page from './page'
import { RoutePath } from './router-config'

interface IRouteParams {
  component: React.ReactNode
  path: RoutePath
  pageName?: string
}

const routes: IRouteParams[] = [
  {
    component: <Root />,
    path: RoutePath.ROOT,
  },
  {
    component: <Ranking />,
    path: RoutePath.RANKING,
    pageName: 'Classement',
  },
  {
    component: <Calendar />,
    path: RoutePath.CALENDAR,
    pageName: 'Calendrier',
  },
  {
    component: <Player />,
    path: RoutePath.PLAYER,
  },
]

export default function Router() {
  return (
    <Suspense fallback={Loading()}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ component, path, pageName }) => (
            <Route element={<Page children={component} pageName={pageName} />} key={path} path={path} />
          ))}
          <Route element={<Page children={<NotFound />} pageName="404" />} path="*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
