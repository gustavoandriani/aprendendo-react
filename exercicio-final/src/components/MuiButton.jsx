import * as React from 'react';
import Button from '@mui/material/Button';

export default function MuiButton({ textButton, colorButton, type}) {
  return (
    <Button color={colorButton} variant="contained" type={type}>{textButton}</Button>
  );
}