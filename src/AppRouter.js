import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/Main'))
const LoginPage = lazy(() => import('./pages/Login'))
const SignupPage = lazy(() => import('./pages/Login'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPassword'))
const CreatePasswordPage = lazy(() => import('./pages/CreatePassword'))

export default function AppOuterRouter({ navigation, profile, isAuthenticated }) {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/create-password" component={CreatePasswordPage} />
          <Route path="/">
            <MainPage navigation={navigation} profile={profile} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
