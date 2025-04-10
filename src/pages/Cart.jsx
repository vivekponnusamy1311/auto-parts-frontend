import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-blue-900">
              <th className="p-3 text-left">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Total</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-blue-50">
                <td className="p-3">{item.name}</td>
                <td className="p-3">${item.price.toFixed(2)}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-3 text-right">
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div className="text-right mt-4">
          <h2 className="text-xl font-semibold">Grand Total: <span className="text-blue-700">${total.toFixed(2)}</span></h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
