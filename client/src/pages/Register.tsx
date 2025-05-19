import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    pincode: '',
    address: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (Object.values(formData).some(value => !value)) {
      toast.error('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email')
      return
    }

    if (formData.mobile.length !== 10 || !/^\d+$/.test(formData.mobile)) {
      toast.error('Please enter a valid 10-digit mobile number')
      return
    }

    if (formData.pincode.length !== 6 || !/^\d+$/.test(formData.pincode)) {
      toast.error('Please enter a valid 6-digit pincode')
      return
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    // Here you would typically handle the registration logic
    toast.success('Registration successful!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

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
            <label className="block text-sm font-medium mb-1">Mobile</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pincode</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}