import React from "react";
import { universityData } from "../../data/treeView";
import TreeList from "./TreeList";
import TreeviewStyle from "./TreeView.module.css";

function Treeview() {
  return (
    <div className={TreeviewStyle.container}>
      {universityData.map((data) => (
        <>
          <h1>{data.name}</h1>
          <TreeList key={data.id} arr={data.children} />
        </>
      ))}
    </div>
  );
}

export default Treeview;
