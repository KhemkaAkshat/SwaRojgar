import React from 'react';

function OrdersDropdown({ ordersDropdownOpen, setOrdersDropdownOpen }) {
  const toggleOrdersDropdown = () => {
    setOrdersDropdownOpen(!ordersDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="hover:text-purple-400 transition-colors"
        onClick={toggleOrdersDropdown}
      >
        Orders
      </button>
      <div className={`absolute top-full right-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-all duration-300 ease-out transform ${ordersDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-2">Current Orders</h4>
          <ul className="">
            <li className="flex items-center text-base"><span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>Order #12345 <button className='p-2 bg-green-400 ml-5 rounded-xl text-sm text-white px-4 hover:scale-110 transition-all ease'>Pay</button></li>
            <p className='pl-4 text-sm mb-4 text-gray-400'>video editing</p>
            <li className="flex items-center text-base"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Order #12346 <button className='p-2 bg-green-400 ml-5 rounded-xl text-sm text-white px-4 hover:scale-110 transition-all ease'>Pay</button></li>
            <p className='pl-4 text-sm mb-4 text-gray-400'>Web Dev</p>
          </ul>
        </div>
        <div className="border-t border-gray-300">
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2">Order History</h4>
            <ul className="space-y-2 text-base">
              <li className="hover:bg-gray-100 p-2 rounded-md flex justify-between">Order #12344<button className='text-md text-red-600 px-4'>Paid</button></li>
              <li className="hover:bg-gray-100 p-2 rounded-md flex justify-between">Order #12343<button className='text-md text-red-600 px-4'>Paid</button></li>
              <li className="hover:bg-gray-100 p-2 rounded-md flex justify-between">Order #12342<button className='text-md text-red-600 px-4'>Paid</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersDropdown;
