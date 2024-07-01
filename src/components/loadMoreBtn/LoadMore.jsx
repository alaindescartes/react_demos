import React, { useState } from "react";
import { randomFacts } from "../../data/randomFacts";
import LoadStyles from "./loadMore.module.css";

const INITIAL_LOAD = 5; // Number of initial and incremental loads

function LoadMore() {
  const [currentData, setCurrentData] = useState(
    randomFacts.slice(0, INITIAL_LOAD)
  );
  const [lastIndex, setLastIndex] = useState(INITIAL_LOAD);

  const loadMore = () => {
    const nextIndex = lastIndex + INITIAL_LOAD;
    const newFacts = randomFacts.slice(lastIndex, nextIndex);
    setCurrentData((prevData) => [...prevData, ...newFacts]);
    setLastIndex(nextIndex); // Update the last index
  };

  return (
    <div className={LoadStyles.container}>
      {currentData.map((fact, index) => (
        <div className={LoadStyles.facts} key={index}>
          {fact}
        </div>
      ))}
      {lastIndex < randomFacts.length && (
        <div>
          <button onClick={loadMore}>Load More</button>
          <p>
            {currentData.length} out of {randomFacts.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default LoadMore;
