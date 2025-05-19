import { ShoppingCart, User, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-red-600">DoorDash</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalogue" className="hover:text-red-600">Catalogue</Link>
            <Link to="/about" className="hover:text-red-600">About</Link>
            <Link to="/contact" className="hover:text-red-600">Contact</Link>
            <Link to="/cart" className="hover:text-red-600">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/login" className="hover:text-red-600">
              <User className="w-6 h-6" />
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/catalogue" className="block hover:text-red-600">Catalogue</Link>
            <Link to="/about" className="block hover:text-red-600">About</Link>
            <Link to="/contact" className="block hover:text-red-600">Contact</Link>
            <Link to="/cart" className="block hover:text-red-600">Cart</Link>
            <Link to="/login" className="block hover:text-red-600">Login</Link>
          </div>
        )}
      </nav>
    </header>
  )
}