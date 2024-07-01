import React from "react";
import TreeItem from "./TreeItem";
import styles from "./TreeList.module.css";

function TreeList({ arr = [] }) {
  return (
    <div className={styles.container}>
      {Array.isArray(arr) && arr.length > 0
        ? arr.map((data) => <TreeItem key={data.id} item={data} />)
        : null}
    </div>
  );
}

export default TreeList;
