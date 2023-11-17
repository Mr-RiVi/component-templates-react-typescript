import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { tableData } from "../../utils/tableData";

// Defines the expected structure of each column in the 'columnNamesArray'.
type ColumnName = {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
};

// Defines the expected structure of columnAttributeArray.
type ColumnAttribute = {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
};

// Defines the expected shape(structure) of the props that the 'DefaultTable' React component should receive.
type TableDataProps = {
  columnNamesArray: readonly ColumnName[];
  columnAttributeArray: readonly ColumnAttribute[];
  stickyHeader: boolean;
};

export default function DefaultTable(tableProps: TableDataProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader={tableProps.stickyHeader}
          aria-label="default table"
        >
          <TableHead>
            <TableRow>
              {tableProps.columnNamesArray.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData && tableData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={tableProps.columnNamesArray.length}
                  align="center"
                >
                  No data available.
                </TableCell>
              </TableRow>
            ) : (
              tableData &&
              tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover>
                      <TableCell>hi</TableCell>
                      <TableCell>hi2</TableCell>
                      <TableCell>hi3</TableCell>
                      <TableCell>hi4</TableCell>
                    </TableRow>
                  );
                })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
