/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ExerciseImport } from './routes/exercise'
import { Route as IndexImport } from './routes/index'
import { Route as ExerciseWithoutbreakImport } from './routes/exercise_.withoutbreak'
import { Route as ExerciseTimerImport } from './routes/exercise_.timer'
import { Route as ExerciseCompletedImport } from './routes/exercise_.completed'
import { Route as ExerciseBreakImport } from './routes/exercise_.break'

// Create/Update Routes

const ExerciseRoute = ExerciseImport.update({
  path: '/exercise',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ExerciseWithoutbreakRoute = ExerciseWithoutbreakImport.update({
  path: '/exercise/withoutbreak',
  getParentRoute: () => rootRoute,
} as any)

const ExerciseTimerRoute = ExerciseTimerImport.update({
  path: '/exercise/timer',
  getParentRoute: () => rootRoute,
} as any)

const ExerciseCompletedRoute = ExerciseCompletedImport.update({
  path: '/exercise/completed',
  getParentRoute: () => rootRoute,
} as any)

const ExerciseBreakRoute = ExerciseBreakImport.update({
  path: '/exercise/break',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/exercise': {
      id: '/exercise'
      path: '/exercise'
      fullPath: '/exercise'
      preLoaderRoute: typeof ExerciseImport
      parentRoute: typeof rootRoute
    }
    '/exercise/break': {
      id: '/exercise/break'
      path: '/exercise/break'
      fullPath: '/exercise/break'
      preLoaderRoute: typeof ExerciseBreakImport
      parentRoute: typeof rootRoute
    }
    '/exercise/completed': {
      id: '/exercise/completed'
      path: '/exercise/completed'
      fullPath: '/exercise/completed'
      preLoaderRoute: typeof ExerciseCompletedImport
      parentRoute: typeof rootRoute
    }
    '/exercise/timer': {
      id: '/exercise/timer'
      path: '/exercise/timer'
      fullPath: '/exercise/timer'
      preLoaderRoute: typeof ExerciseTimerImport
      parentRoute: typeof rootRoute
    }
    '/exercise/withoutbreak': {
      id: '/exercise/withoutbreak'
      path: '/exercise/withoutbreak'
      fullPath: '/exercise/withoutbreak'
      preLoaderRoute: typeof ExerciseWithoutbreakImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ExerciseRoute,
  ExerciseBreakRoute,
  ExerciseCompletedRoute,
  ExerciseTimerRoute,
  ExerciseWithoutbreakRoute,
})

/* prettier-ignore-end */
