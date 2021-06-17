import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const pageName = location.pathname.slice(1)

  return (
    <header className="bg-white shadow-xl">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{pageName.replace(/^\w/, (p) => p.toUpperCase())}</h1>
      </div>
    </header>
  )
}
