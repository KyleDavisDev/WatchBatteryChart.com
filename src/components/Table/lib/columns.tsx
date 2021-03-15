import { IDataTableColumn } from "react-data-table-component";
import * as React from "react";

export interface IColumn extends IDataTableColumn {}

export const columns: IColumn[] = [
  {
    name: (
      <span>
        Energizer
        <br /> Eveready
        <br /> Rayovac
      </span>
    ),
    selector: "Energizer",
    sortable: true,
    compact: false
  },
  {
    name: (
      <span>
        Maxell
        <br />
        National
        <br />
        Panasonic
        <br />
        Sony
        <br />
        Toshiba
      </span>
    ),
    selector: "Maxell",
    sortable: true
  },

  { name: "Timex", selector: "Timex", sortable: true },
  { name: "Duracell", selector: "Duracell", sortable: true },
  {
    name: "Dimensions (MM)",
    selector: "Dimensions(mm)",
    sortable: true
  }
];
