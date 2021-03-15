import * as React from "react";
import styled from "styled-components";
import { data, IData } from "./lib/data";
import FilterInput from "./components/FilterInput/FilterInput";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import NormalTable from "./components/NormalTable/NormalTable";

const StyledContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
`;

const Table: React.FC = () => {
  const TABLET_TO_DESKTOP_BREAKPOINT = 993;
  const size = useWindowSize();
  const [filterText, setFilterText] = React.useState("");

  // const subHeaderComponentMemo = React.useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setResetPaginationToggle(!resetPaginationToggle);
  //       setFilterText("");
  //     }
  //   };
  //
  //   return (
  //
  //   );
  // }, [filterText, resetPaginationToggle]);

  const filteredData: IData[] = data.filter((row: IData) => {
    if (filterText.length === 0) return true;

    return Object.keys(row).find(column => {
      return row[column].indexOf(filterText) > -1;
    });
  });

  if (size > TABLET_TO_DESKTOP_BREAKPOINT) {
    return <NormalTable data={filteredData} />;
  }

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
        <StyledContainer>hi</StyledContainer>
      )}
    </>
  );
};

export default Table;
