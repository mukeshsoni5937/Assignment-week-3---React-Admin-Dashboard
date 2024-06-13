import React from 'react';
import { Container, Grid } from '@mui/material';
import DataTable from '../components/DataTable';
import LineChart from '../components/LineChart';
import Calendar from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LineChart />
        </Grid>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <Calendar />
        </Grid>
        <Grid item xs={12} md={6}>
          <KanbanBoard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
