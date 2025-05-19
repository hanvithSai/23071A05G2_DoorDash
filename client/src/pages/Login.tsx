import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email')
      return
    }

    // Here you would typically handle the login logic
    toast.success('Login successful!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login to DoorDash</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}