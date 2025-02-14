import React from "react";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 mt-2 p-4 rounded-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <a href="#">Cook-Book</a>
          </div>
          <div className="flex justify-center">
            <a id="AllRecipe" href="#" className="text-gray-300 hover:text-white">
              All Recipes
            </a>
            <a id="MyRecipe" href="#" className="text-gray-300 hover:text-white">
              My Recipes
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
