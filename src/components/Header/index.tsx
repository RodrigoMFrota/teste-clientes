import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    navigate('/login')
  }

  return (
    <header className="w-full h-16 bg-gray-900 flex items-center justify-between px-8">
      <span className="text-white font-semibold text-lg">
        Cliente Manager
      </span>
      <button
        onClick={handleLogout}
        className="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
      >
        Sair
      </button>
    </header>
  )
}

export default Header