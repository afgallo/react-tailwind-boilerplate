import { atom, useAtom } from 'jotai'
import AppRouter from './AppRouter'

export default function App() {
  const navigationAtom = atom(['Home', 'Features', 'Users'])
  const profileAtom = atom([
    { name: 'Your Profile', path: '/profile' },
    { name: 'Settings', path: '/settings' },
    { name: 'Sign out', path: '/signout' },
  ])
  const [navigation] = useAtom(navigationAtom)
  const [profile] = useAtom(profileAtom)

  return <AppRouter navigation={navigation} profile={profile}></AppRouter>
}
