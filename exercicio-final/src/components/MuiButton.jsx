import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

MuiButton.propTypes = {
  textButton: PropTypes.string,
  colorButton: PropTypes.string,
  type: PropTypes.string
}

export default function MuiButton({ textButton, colorButton, type }) {
  return (
    <Button
      style={{ margin: "0 .5rem"}}
      color={colorButton}
      variant="contained"
      type={type}
    >
          {textButton}
    </Button>
  );
}