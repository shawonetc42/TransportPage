import React from "react";

function NavItem({ text, isActive }) {
  return (
    <div className="flex flex-col self-stretch my-auto">
      <div>{text}</div>
      {isActive && <div className="flex shrink-0 mt-2 h-0.5 bg-blue-600" />}
    </div>
  );
}

export default NavItem;
