import React from "react";
import TreeviewStyle from "./TreeView.module.css";

function Treeview() {
  return (
    <div className={TreeviewStyle.container}>
      <div className={TreeviewStyle.tree}></div>
    </div>
  );
}

export default Treeview;
