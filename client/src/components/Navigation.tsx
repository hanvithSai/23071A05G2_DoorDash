import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="text-red-600" />
          <span className="font-bold text-xl">DoorDash</span>
        </div>

        <div className="flex space-x-6">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-red-600 font-medium"
                : "text-gray-700 hover:text-red-600"
            } transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/catalogue"
            className={`${
              location.pathname === "/catalogue"
                ? "text-red-600 font-medium"
                : "text-gray-700 hover:text-red-600"
            } transition-colors`}
          >
            Catalogue
          </Link>
        </div>
      </div>
    </nav>
  );
}
