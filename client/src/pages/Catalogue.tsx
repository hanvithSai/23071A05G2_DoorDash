import { ShoppingCart } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

// Sample product data
const products = [
  {
    id: 1,
    name: "Formal Shirt",
    price: 1999,
    description: "Premium cotton formal shirt for professional settings",
    image: "https://via.placeholder.com/300x300?text=Formal+Shirt",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 799,
    description: "Comfortable cotton t-shirt for everyday wear",
    image: "https://via.placeholder.com/300x300?text=Casual+T-Shirt",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 2499,
    description: "Classic blue denim jeans with modern fit",
    image: "https://via.placeholder.com/300x300?text=Denim+Jeans",
  },
  {
    id: 4,
    name: "Formal Pants",
    price: 1899,
    description: "Premium formal pants suitable for office wear",
    image: "https://via.placeholder.com/300x300?text=Formal+Pants",
  },
  {
    id: 5,
    name: 'Smart TV 40"',
    price: 28990,
    description: "HD Smart TV with built-in streaming apps",
    image: "https://via.placeholder.com/300x300?text=Smart+TV",
  },
  {
    id: 6,
    name: "Washing Machine",
    price: 18499,
    description: "Front-loading automatic washing machine with 7kg capacity",
    image: "https://via.placeholder.com/300x300?text=Washing+Machine",
  },
];

export default function Catalogue() {
  const { items, addItem, totalItems } = useCart();

  // Function to add item to cart
  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to your cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Product Catalogue</h1>
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Cart summary if items exist */}
      {items.length > 0 && (
        <div className="mb-8 p-4 border rounded-lg bg-gray-50">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Shopping Cart Summary</h2>
            <Link to="/cart" className="text-blue-600 hover:text-blue-800">
              View Cart
            </Link>
          </div>
          <div className="mt-4 border-t pt-4 font-bold flex justify-between">
            <span>Total Items: {totalItems}</span>
            <span>
              Total: ₹
              {items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold text-red-600">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
              <p className="text-gray-600 my-2">{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
