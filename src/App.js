import { atom, useAtom } from 'jotai';
import AppRouter from './AppRouter';

export default function App() {
  const navigationAtom = atom(['Home', 'Team', 'Users']);
  const profileAtom = atom(['Your Profile', 'Settings', 'Sign out']);
  const [navigation] = useAtom(navigationAtom);
  const [profile] = useAtom(profileAtom);

  return <AppRouter navigation={navigation} profile={profile}></AppRouter>;
}
