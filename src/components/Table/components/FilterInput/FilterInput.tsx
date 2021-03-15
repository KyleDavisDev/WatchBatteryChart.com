import * as React from "react";
import styled from "styled-components";
import { MouseEventHandler } from "react";

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;

  input {
    width: 200px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #bbb;
    padding: 0 32px 0 16px;
  }

  button {
    border: 1px solid #bbb;
    border-left: 0;
    border-radius: 0 5px 5px 0;
    padding: 0 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
`;

export interface IFilterInput {
  filterText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: MouseEventHandler<HTMLButtonElement>;
}

const FilterInput: React.FC<IFilterInput> = props => {
  const { filterText, onChange, onClear } = props;

  return (
    <StyledContainer>
      <input
        id="search"
        type="text"
        placeholder="Filter text"
        aria-label="Search Input"
        value={filterText}
        onChange={onChange}
      />
      <button type="button" onClick={onClear}>
        X
      </button>
    </StyledContainer>
  );
};

export default FilterInput;
