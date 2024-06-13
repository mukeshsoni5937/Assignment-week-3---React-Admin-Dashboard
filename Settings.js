import React from 'react';
import { Button, Container, Grid } from '@mui/material';

const Settings = ({ setThemeMode }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => setThemeMode('light')}>
            Light Theme
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={() => setThemeMode('dark')}>
            Dark Theme
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
