/**
 * MuiTable Component
 *
 * This component renders a Material-UI Table based on the provided data and configurations.
 *
 * @component
 * @param {object} props - The properties passed to the component.
 * @param {Array} props.columnNamesArray - An array of objects defining the structure of each column.
 *   Each column object should have the following properties:
 *   - id: string - A unique identifier for the column.
 *   - label: string - The label or header text for the column.
 *   - minWidth?: number - (Optional) The minimum width of the column.
 *   - align?: 'right' | 'left' | 'center' - (Optional) The alignment of the column content.
 @param {Array} props.columnTypeMappingArray - An array of objects mapping column names to their types.
 *   Each object should have the following properties:
 *   - attributeName: string - The attribute name(key) of the data value.
 *   - type: 'string' | 'number' | 'button' - The type of content that should be rendered in the column.
 *     Valid types are 'string' for regular string content, 'number' for numeric content,
 *     and 'button' for content that should be rendered inside a button component.
 * @param {Array} props.tableData - An array of objects representing the data to be displayed in the table.
 * @param {boolean} props.stickyHeader - Determines whether the table header should stick to the top when scrolling.
 * @returns {React.ReactElement} The rendered MuiTable component.
 */

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

// Defines the expected structure of 'columnNamesArray'.
type ColumnName = {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
};

// Defines the expected structure of 'columnTypeMappingArray'.
type ColumnAttributeMapping = {
  [key: string]:
    | {
        type?: "button" | undefined;
        buttonKind?: "text" | "content" | "mixed";
      }
    | undefined;
};

/**
 * Index signature.
 * Defines the expected structure of 'tableData'.
 */
type StringMap = {
  [key: string]: any;
};

// Defines the expected shape(structure) of the props that the 'DefaultTable' React component should receive.
type TableDataProps = {
  columnNamesArray: readonly ColumnName[];
  columnAttributeMapping: ColumnAttributeMapping;
  tableData: StringMap | undefined;
  stickyHeader: boolean;
};

export default function DefaultTable(tableProps: TableDataProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  type ContentOptions = {
    type?: any | "button";
    buttonKind?: "text" | "content" | "mixed";
  };

  /**
   * Renders the content of a table cell based on its type.
   * @param content - The content of the cell.
   * @param type - The type of the content (e.g., "string", "number", "button").
   * @returns The rendered content based on its type.
   */
  const renderCellContent = (content: any, contentOptions: ContentOptions) => {
    if (contentOptions.type === "button") {
      return <Button>{content}</Button>;
    }
    return content;
  };

  return (
    <Paper sx={{ width: "80%", overflow: "hidden", margin: "auto" }}>
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
            {(tableProps.tableData && tableProps.tableData.length === 0) ||
            tableProps.tableData === undefined ? (
              <TableRow>
                <TableCell
                  colSpan={tableProps.columnNamesArray.length}
                  align="center"
                >
                  No data available.
                </TableCell>
              </TableRow>
            ) : (
              tableProps.tableData &&
              tableProps.tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: StringMap) => {
                  return (
                    <TableRow hover>
                      {Object.keys(tableProps.columnAttributeMapping).map(
                        (attributeName, index: number) => (
                          <TableCell key={index}>
                            {renderCellContent(
                              row[attributeName],
                              tableProps.columnAttributeMapping[attributeName]
                            )}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  );
                })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={tableProps.tableData && tableProps.tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
