import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Home = lazy(() => import('./Home'))
const Features = lazy(() => import('./Features'))
const Users = lazy(() => import('./Users'))
const Profile = lazy(() => import('./Profile'))

export default function Main({ navigation, profile }) {
  return (
    <div className="mx-auto">
      <Nav navigation={navigation} profile={profile} />
      <Header />
      {/* bg-gradient-to-r from-purple-800 via-purple-500 to-green-400 */}
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
        </div>
      </main>
    </div>
  )
}
