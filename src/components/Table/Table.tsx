import * as React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { data } from "./data";
import { columns } from "./columns";

const StyledTable = styled(DataTable)`
  div[role="columnheader"] {
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  div.rdt_TableRow {
    &:hover,
    &:focus {
      background-color: #eee;
    }
  }
`;

const Table: React.FC = () => {
  return (
    <>
      <StyledTable title="Movie List" columns={columns} data={data} />
    </>
  );
};

export default Table;
