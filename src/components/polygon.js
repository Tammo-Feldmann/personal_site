import React from "react";
import styles from './main.module.css'
import { useWindowDimensions } from './utils/windowDimensions'

const Polygon = () => {
  const { windowWidth } = useWindowDimensions();
  //TODO: Make this component reusable with props and move out its styling to clean up
  return (
    <div className={styles.polygon} style={{
      backgroundColor: `#FAFAFA`,
      /* The points are: centered top, left bottom, right bottom */
      clipPath: `polygon(0% -1%, 100% -1%, 100% 21%, 98.6% 21%, 97% 16%, 95.4% 19.5%, 93.4% 12%, 91% 20%, 90% 14%, 89.4% 14.4%, 88.8% 14%, 87.8% 21%, 87% 16%, 86.2% 21%, 15% 22%, 0 ${windowWidth <= 414 ? "22%" : windowWidth <= 768 ? "65%" : "100%"})`,
    }}>
    </div>
  );
}

export default Polygon;