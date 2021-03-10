import * as React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { data, IData } from "./data";
import { columns } from "./columns";
import FilterInput from "./components/FilterInput";

const StyledTable = styled(DataTable)`
  div[role="columnheader"] {
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  div.rdt_TableRow[role="row"] {
    &:hover,
    &:focus {
      background-color: #eee;
    }
  }
`;

const Table: React.FC = () => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterInput
        onChange={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const filteredData = data.filter((row: IData) => {
    if (filterText.length === 0) return true;

    return Object.keys(row).find(column => {
      if (row[column].indexOf(filterText) > -1) return true;
      return false;
    });
  });

  return (
    <>
      <StyledTable
        title="Movie List"
        columns={columns}
        data={filteredData}
        fixedHeader={true}
        subHeader={true}
        subHeaderComponent={subHeaderComponentMemo}
      />
    </>
  );
};

export default Table;
