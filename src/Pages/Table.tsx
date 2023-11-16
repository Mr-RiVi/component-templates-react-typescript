import MuiTable from "../components/Tables/MuiTable";

import { columns } from "../utils/tableData";

const Table = () => {
  return (
    <>
      <MuiTable columnNamesArray={columns} stickyHeader={true} />
    </>
  );
};

export default Table;
