import Link from 'next/link';

function Header() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">YourLogo</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/products">
              <div className="text-white hover:text-gray-300">Products</div>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <div className="text-white hover:text-gray-300">Categories</div>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <div className="text-white hover:text-gray-300">Cart</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
