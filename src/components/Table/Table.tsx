import * as React from "react";
import DataTable from "react-data-table-component";
import { data, IData } from "./data";
import { columns } from "./columns";
import FilterInput from "./components/FilterInput";

const customStyles = {
  table: {
    style: {
      borderRadius: "10px"
    }
  },
  subHeader: {
    style: {
      backgroundColor: "inherit"
    }
  },
  header: {
    style: {
      display: "none"
    }
  },
  headRow: {
    style: {
      backgroundColor: "#36304a",
      borderRadius: "10px 10px 0 0"
    }
  },
  headCells: {
    style: {
      fontSize: "18px",
      color: "#efefef",
      paddingTop: "5px",
      paddingBottom: "5px"
    },
    activeSortStyle: {
      color: "#efefef",
      fontWeight: "bold"
    },
    inactiveSortStyle: {
      "&:focus": {
        color: "#efefef",
        fontWeight: "bold"
      },
      "&:hover": {
        color: "#efefef",
        fontWeight: "bold"
      }
    }
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#cdcdcd"
    }
  },
  cells: {
    style: {
      fontSize: "15px"
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
        fixedHeaderScrollHeight={"80vh"}
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
