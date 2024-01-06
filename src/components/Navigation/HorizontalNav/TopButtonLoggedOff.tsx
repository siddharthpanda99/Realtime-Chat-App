import React from 'react'
import { Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopButtonLoggedOff = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="contained" onClick={() => navigate("/register")}>
        Sign Up
      </Button>
    </Stack>
  );
}

export default TopButtonLoggedOff