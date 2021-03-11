import * as React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { data, IData } from "./data";
import { columns } from "./columns";
import FilterInput from "./components/FilterInput";

const customStyles = {
  table: {
    style: {
      borderLeft: "1px solid #eee",
      borderRight: "1px solid #eee",
      borderBottom: "1px solid #eee",
      borderTop: "1px solid #eee"
    }
  },
  subHeader: {
    style: {
      // borderLeft: "1px solid #eee",
      // borderRight: "1px solid #eee",
      // borderTop: "1px solid #eee"
    }
  },
  header: {
    style: {
      display: "none"
    }
  },
  headRow: {
    style: {
      backgroundColor: "#36304a"
    }
  },
  headCells: {
    style: {
      color: "#efefef",
      paddingTop: "5px",
      paddingBottom: "5px"
    }
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#eee"
    }
  }
};

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
      return row[column].indexOf(filterText) > -1;
    });
  });

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredData}
        fixedHeader={true}
        fixedHeaderScrollHeight={"50vh"}
        subHeader={true}
        subHeaderComponent={subHeaderComponentMemo}
        customStyles={customStyles}
        highlightOnHover={true}
        striped={true}
      />
    </>
  );
};

export default Table;
