import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Grid, Typography, Paper } from '@mui/material';

const DenseHeightGrid = () => {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400 }}>
      <DataGrid rowHeight={25} {...data} loading={loading} />
    </div>
  );
};

const CompanyStatsSection = () => {
  return (
    <Grid item xs={11.7}>
      <Paper sx={{ backgroundColor: 'white', padding: 2, borderRadius: '8px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', marginBottom: 2 }}>
          Company Stats
        </Typography>
        <DenseHeightGrid />
      </Paper>
    </Grid>
  );
};

export default CompanyStatsSection;
