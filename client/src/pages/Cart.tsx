import React from "react";
import { useCart } from "../context/CartContext";
import { Trash, MinusCircle, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalAmount, totalItems } =
    useCart();

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id);
    toast.success(`${name} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="mb-8 text-gray-600">Your cart is empty</p>
        <Link
          to="/catalogue"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex border-b py-4 last:border-b-0">
              <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <MinusCircle size={18} />
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <PlusCircle size={18} />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="ml-6 text-red-500 hover:text-red-700"
                    title="Remove item"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Items ({totalItems}):</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>₹{totalAmount > 5000 ? "0" : "99"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax:</span>
              <span>₹{Math.round(totalAmount * 0.18).toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>
                ₹
                {(
                  totalAmount +
                  (totalAmount > 5000 ? 0 : 99) +
                  Math.round(totalAmount * 0.18)
                ).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-6 transition-colors"
            onClick={() => toast.success("Proceeding to checkout...")}
          >
            Proceed to Checkout
          </button>

          <Link
            to="/catalogue"
            className="block text-center mt-4 text-blue-600 hover:text-blue-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
