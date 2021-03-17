import * as React from "react";
import { data, IData } from "./lib/data";
import FilterInput from "./components/FilterInput/FilterInput";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import NormalTable from "./components/NormalTable/NormalTable";
import TowerTable from "./components/TowerTable/TowerTable";

const Table: React.FC = () => {
  const TABLET_TO_DESKTOP_BREAKPOINT = 768;
  const size = useWindowSize();
  const [filterText, setFilterText] = React.useState("");

  const filteredData: IData[] = data.filter((row: IData) => {
    if (filterText.length === 0) return true;

    return Object.keys(row).find(column => {
      return row[column].indexOf(filterText) > -1;
    });
  });

  return (
    <>
      <FilterInput
        onChange={e => setFilterText(e.target.value)}
        onClear={() => setFilterText("")}
        filterText={filterText}
      />
      {size.width && size.width > TABLET_TO_DESKTOP_BREAKPOINT ? (
        <NormalTable data={filteredData} />
      ) : (
        <TowerTable data={filteredData} />
      )}
    </>
  );
};

export default Table;
