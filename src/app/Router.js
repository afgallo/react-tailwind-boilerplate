import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const MainPage = lazy(() => import('../pages/Main'))
const LoginPage = lazy(() => import('../pages/Login'))
const SignupPage = lazy(() => import('../pages/Login'))
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPassword'))
const CreatePasswordPage = lazy(() => import('../pages/CreatePassword'))
const UnauthorizedPage = lazy(() => import('../pages/Unauthorized'))

export default function Router({ navigation, profile, isAuthenticated }) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/create-password" component={CreatePasswordPage} />
          <Route path="/unauthorized" component={UnauthorizedPage} />
          <Route path="/">
            {isAuthenticated ? <MainPage navigation={navigation} profile={profile} /> : <Redirect to="/unauthorized" />}
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
