import * as React from "react";
import DataTable from "react-data-table-component";
import { data } from "./data";
import { columns } from "./columns";

const Table: React.FC = () => {
  return (
    <>
      <DataTable title="Movie List" columns={columns} data={data} />
    </>
  );
};

export default Table;
