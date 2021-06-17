import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Features = lazy(() => import('./Features'))
const Users = lazy(() => import('./Users'))
const Profile = lazy(() => import('./Profile'))

export default function AppInnerRouter() {
  return (
    <Suspense fallback={<div>Loading internal route...</div>}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  )
}
