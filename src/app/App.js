import { atom, useAtom } from 'jotai'
// import { useEffect } from 'react'
import Router from './Router'

export default function App() {
  const authAtom = atom(true)
  const navigationAtom = atom(['Home', 'Features', 'Users'])
  const profileAtom = atom([
    { name: 'Your Profile', path: '/profile' },
    { name: 'Settings', path: '/settings' },
    { name: 'Sign out', path: '/signout' },
  ])
  const [navigation] = useAtom(navigationAtom)
  const [profile] = useAtom(profileAtom)
  const [isAuthenticated] = useAtom(authAtom)

  // useEffect(() => {
  //   const t = setTimeout(() => {
  //     setIsAuthenticated(false)
  //   }, 3000)

  //   return () => clearTimeout(t)
  // }, [setIsAuthenticated])

  return <Router navigation={navigation} profile={profile} isAuthenticated={isAuthenticated} />
}
