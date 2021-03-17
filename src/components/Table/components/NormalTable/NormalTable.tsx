import * as React from "react";
import { columns } from "../../lib/columns";
import DataTable from "react-data-table-component";
import customStyles from "./customStyles";
import { IData } from "../../lib/data";

const NormalTable: React.FC<{ data: IData[] }> = props => {
  return (
    <DataTable
      columns={columns}
      data={props.data}
      customStyles={customStyles}
      highlightOnHover={true}
      striped={true}
    />
  );
};

export default NormalTable;
