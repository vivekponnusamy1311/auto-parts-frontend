// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-[#0046be] text-white px-4 py-3 shadow-md flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">AutoParts Pro</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/catalog" className="hover:underline">Catalog</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
