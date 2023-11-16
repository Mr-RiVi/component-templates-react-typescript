import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

const rows = [
  ["India", "IN", 1324171354, 3287263],
  ["China", "CN", 1403500365, 9596961],
  ["Italy", "IT", 60483973, 301340],
  ["United States", "US", 327167434, 9833520],
  ["Canada", "CA", 37602103, 9984670],
  ["Australia", "AU", 25475400, 7692024],
  ["Germany", "DE", 83019200, 357578],
  ["Ireland", "IE", 4857000, 70273],
  ["Mexico", "MX", 126577691, 1972550],
  ["Japan", "JP", 126317000, 377973],
  ["France", "FR", 67022000, 640679],
  ["United Kingdom", "GB", 67545757, 242495],
  ["Russia", "RU", 146793744, 17098246],
  ["Nigeria", "NG", 200962417, 923768],
  ["Brazil", "BR", 210147125, 8515767],
];

type Column = {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
};

type TableDataProps = {
  columnNamesArray: readonly Column[];
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {tableProps.columnNamesArray.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
