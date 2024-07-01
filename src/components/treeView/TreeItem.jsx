import { faArrowDown, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./TreeItem.module.css";
import TreeList from "./TreeList";

function TreeItem({ item }) {
  const [currentChildren, setCurrentChildren] = useState({});

  const handleToggle = (current) => {
    setCurrentChildren({
      ...currentChildren,
      [current]: !currentChildren[current],
    });
  };

  const toggleIcon = currentChildren[item.name] ? faArrowDown : faMinus;
  return (
    <ul className={styles.container}>
      <li>
        {item.name}
        {item.children && item.children.length > 0 ? (
          <button onClick={() => handleToggle(item.name)}>
            <FontAwesomeIcon icon={toggleIcon} className={styles.icon} />
          </button>
        ) : null}
      </li>
      {item.children &&
      item.children.length > 0 &&
      currentChildren[item.name] ? (
        <TreeList arr={item.children} />
      ) : null}
    </ul>
  );
}

export default TreeItem;
