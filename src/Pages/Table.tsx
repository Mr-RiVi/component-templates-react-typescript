import MuiTable from "../components/Tables/MuiTable";

import { columns } from "../utils/tableData";

const Table = () => {
  return (
    <>
      <MuiTable
        columnNamesArray={columns}
        columnAttributeArray={}
        stickyHeader={true}
      />
    </>
  );
};

export default Table;
