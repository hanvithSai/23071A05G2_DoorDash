import React from 'react'
import { CreditCard, Lock } from 'lucide-react'

export default function Payment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-8 h-8 text-green-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Secure Payment</h1>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="cardNumber"
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹99.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">₹9.90</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹108.90</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Pay Now
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Your payment information is encrypted and secure</p>
        </div>
      </div>
    </div>
  )
}