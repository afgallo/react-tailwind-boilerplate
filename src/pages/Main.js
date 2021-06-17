import PageRouter from './_PageRouter'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Main({ navigation, profile }) {
  return (
    <div className="mx-auto">
      <Nav navigation={navigation} profile={profile} />
      <Header />
      {/* bg-gradient-to-r from-purple-800 via-purple-500 to-green-400 */}
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <PageRouter />
        </div>
      </main>
    </div>
  )
}
