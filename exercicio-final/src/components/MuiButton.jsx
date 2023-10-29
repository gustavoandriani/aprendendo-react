import * as React from 'react';
import Button from '@mui/material/Button';

export default function MuiButton({ textButton }) {
  return (
    <Button color="warning" variant="contained">{textButton}</Button>
  );
}