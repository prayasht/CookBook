
import React from "react";

function Navbar(){
    return (
        <>
            <nav>
            <div class="logo"><a href="#">Cook-Book</a></div>
            <div class="nav-links">
            <a id="AllRecipe" href="#">All Recipes</a>
            <a id="MyRecipe" href="#">My Recipes</a>
            </div>
            </nav>
        </>
    )
}

export default Navbar;