import * as React from "react";
import styled from "styled-components";
import { IData } from "../../lib/data";
import { columns, IColumn } from "../../lib/columns";

const StyledContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  > div {
    background-color: #fff;
    padding: 20px;
  }

  > div:nth-child(even) {
    background-color: #eee;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLeft = styled.div`
  flex: 1;
  line-height: 1;
`;

const StyledRight = styled.div`
  flex: 1;
`;

const columnDict = {};
columns.forEach((col: IColumn) => {
  const selector = col.selector as string;

  if (!columnDict[selector]) {
    columnDict[selector] = col;
  }
});

const TowerTable: React.FC<{ data: IData[] }> = props => {
  const { data } = props;

  return (
    <StyledContainer>
      {data.map((row: IData) => {
        return (
          <div>
            {Object.keys(row).map((brand: string) => {
              const name = columnDict[brand]?.name;
              if (!name) return;

              return (
                <StyledRow>
                  <StyledLeft>{name}</StyledLeft>
                  <StyledRight>{row[brand]}</StyledRight>
                  <br />
                </StyledRow>
              );
            })}
          </div>
        );
      })}
    </StyledContainer>
  );
};

export default TowerTable;
