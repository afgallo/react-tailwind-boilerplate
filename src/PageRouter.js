import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'))
const Team = lazy(() => import('./pages/Team'))
const Users = lazy(() => import('./pages/Users'))

export default function AppInnerRouter() {
  return (
    <Suspense fallback={<div>Loading internal route...</div>}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team">
            <Team />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
}
