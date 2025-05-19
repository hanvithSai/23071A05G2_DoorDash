import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Mail className="w-8 h-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-600">doordash@gmail.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Phone className="w-8 h-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">+91 7847777777</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <MapPin className="w-8 h-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-gray-600">Bachupally<br />Hyderabad, Telangana 500083</p>
        </div>
      </div>
    </div>
  )
}