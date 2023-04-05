import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-items">
        <Sort />
        <Filter />
      </div>
    </aside>
  );
};

export default Sidebar;
