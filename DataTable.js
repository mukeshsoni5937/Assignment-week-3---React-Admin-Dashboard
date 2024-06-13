import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGrid', col2: 'Material-UI' },
  { id: 3, col1: 'XGrid', col2: 'is Awesome' },
  { id: 4, col1: 'Hello', col2: 'World' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const DataTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataTable;
