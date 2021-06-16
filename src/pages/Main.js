import PageRouter from '../PageRouter';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Main({ navigation, profile }) {
  return (
    <div className="max-w-screen-2xl mx-auto">
    <Nav navigation={navigation} profile={profile} />
    <Header />
    <main className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <PageRouter />
      </div>
    </main>
  </div>
  )
}