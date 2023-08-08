import React from "react";
import Button from '@mui/material/Button';

import styles from "../../assests/CSS/grid-view.module.css";

const GridButton = ({ title, onclick }) => {
  return (
    <div>
      <Button variant="outlined" onClick={onclick}>
        {title}
      </Button>
    </div>
  );
};

export default GridButton;
