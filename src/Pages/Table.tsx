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

import MuiTable from "../components/Tables/MuiTable";

import { columns, columnAttributeMapping, tableData } from "../utils/tableData";

const Table = () => {
  return (
    <>
      <MuiTable
        columnNamesArray={columns}
        columnAttributeMapping={columnAttributeMapping}
        tableData={tableData}
        stickyHeader={true}
      />
    </>
  );
};

export default Table;
