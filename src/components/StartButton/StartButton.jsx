import React from 'react'
import styles from "./StartButton.module.css"; 

const StartButton = ({StartButtonText = 'Starta spelet', onStart}) => {
	return (
		<div>
		<button className={styles.startButton} onClick={onStart}>
        {StartButtonText}
      </button>
    </div>
  );
};

export default StartButton;