import * as React from "react";
import { columns } from "../../lib/columns";
import DataTable from "react-data-table-component";
import customStyles from "./customStyles";
import { IData } from "../../lib/data";

const NormalTable: React.FC<{ data: IData[] }> = props => {
  console.log(props.data);
  return (
    <DataTable
      columns={columns}
      data={props.data}
      fixedHeader={true}
      fixedHeaderScrollHeight={"80vh"}
      // subHeader={true}
      // subHeaderComponent={subHeaderComponentMemo}
      customStyles={customStyles}
      highlightOnHover={true}
      striped={true}
    />
  );
};

export default NormalTable;
