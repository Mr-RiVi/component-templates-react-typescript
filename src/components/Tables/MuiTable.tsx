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
 * @param {Object} props.columnAttributeMapping - An object mapping column names to their types and optional rendering options.
 *   Each object should have the following properties:
 *   - attributeName: string - The attribute name (key) of the data value.
 *   - type: 'string' | 'number' | 'button' - The type of content that should be rendered in the column.
 *     Valid types are 'string' for regular string content, 'number' for numeric content,
 *     and 'button' for content that should be rendered inside a button component.
 *   - buttonKind?: 'text' | 'content' | 'mixed' - (Optional) The kind of button content if type is 'button'.
 *     - 'text': Renders a button with the specified text.
 *     - 'content': Renders a button with the raw content.
 *     - 'mixed': Renders a button with a combination of content and text.
 *   - buttonVarient?: 'text' | 'outlined' | 'contained' - (Optional) The variant of the button when type is 'button'.
 *   - text?: string - (Optional) The text to be displayed in the button when buttonKind is 'text' or 'mixed'.
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

// Defines the expected structure of 'columnTypeMapping Object'.
type ColumnAttributeMapping = {
  [key: string]:
    | {
        type?: "button" | undefined;
        buttonKind?: "text" | "content" | "mixed";
        buttonVarient?: "text" | "outlined" | "contained";
        text?: string;
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
    type?: "button";
    buttonKind?: "text" | "content" | "mixed";
    buttonVarient?: "text" | "outlined" | "contained";
    text?: string;
  };

  /**
   * Renders the content of a table cell based on its type and options.
   * @param content - The content of the cell.
   * @param contentOptions - Additional options for rendering content (e.g., type-specific options for buttons).
   * @returns The rendered content based on its type and options.
   */
  const renderCellContent = (
    content: any,
    contentOptions: ContentOptions | undefined
  ) => {
    // Check if the content type is not a button
    if (contentOptions?.type !== "button") {
      return content;
    }

    // Destructure button options
    const { buttonKind, buttonVarient = "contained", text } = contentOptions;

    // Ensure buttonKind is provided
    if (!buttonKind) {
      throw new Error("buttonKind is required when type is 'button'.");
    }

    // Handle different buttonKind cases
    switch (buttonKind) {
      case "text":
        if (!text) {
          throw new Error("Text is required when buttonKind is 'text'.");
        }
        // Render button with text
        return <Button variant={buttonVarient}>{text}</Button>;

      case "mixed":
        if (!text) {
          throw new Error("Text is required when buttonKind is 'mixed'.");
        }
        // Render button with content and text
        return (
          <Button variant={buttonVarient}>
            {content} {text}
          </Button>
        );

      case "content":
        // Render button with content
        return <Button variant={buttonVarient}>{content}</Button>;

      default:
        // Handle unsupported buttonKind
        throw new Error(`Unsupported buttonKind: ${buttonKind}`);
    }
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
                    <TableRow>
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
