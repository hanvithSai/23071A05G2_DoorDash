import React from 'react'
import { Building2 } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Building2 className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">Discover our story and mission</p>
        </div>

        <div className="prose prose-lg mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize the online shopping experience, 
              we've grown from a small startup to a trusted e-commerce destination. 
              Our journey is built on the foundation of quality, innovation, and 
              customer satisfaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide our customers with an unparalleled shopping 
              experience, offering carefully curated products at competitive prices. 
              Our commitment to excellence drives everything we do.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">We never compromise on the quality of our products and services.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">Honesty and transparency in all our business practices.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly evolving to meet our customers' changing needs.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-gray-600 mb-4">
              We're always looking for ways to improve and grow. Your feedback and 
              support help us continue to evolve and serve you better. Thank you for 
              being part of our story.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}