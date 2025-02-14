import React from "react";

function RecipePreview() {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
        <img className="w-full h-48 object-cover" src="" alt="Recipe" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">Not Added Yet</h3>
          <span className="text-yellow-500">★★★★★</span>
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700">
            Share
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipePreview;
