import React from "react";

const Navbar = navItems => {
  console.log(Array.isArray(navItems));
  return (
    <div>
      <ul>
        {navItems.map(i => `<li>${i}</li>`)}
      </ul>
    </div>
  );
};

export default Navbar;
