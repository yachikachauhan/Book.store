import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-slate-600">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <h1 class="text-white text-xl font-bold">Welcome To Book Store</h1>
          <button
            type="button"
            class="flex items-center bg-gray-800 rounded-full p-1"
          >
           
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;