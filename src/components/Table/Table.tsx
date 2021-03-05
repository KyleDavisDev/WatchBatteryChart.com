import * as React from "react";
import DataTable from "react-data-table-component";

interface IData {
  Energizer?: string;
  DimensionsMM?: string;
  DimensionsIN?: string;
  IEC?: string;
  AG?: string;
  AWI?: string;
  Bulova?: string;
  Citizen?: string;
  Duracell?: string;
  Renata?: string;
  Seiko?: string;
  Timex?: string;
  Maxel?: string;
  Varta?: string;
  Vinnic?: string;
}

const Table: React.FC = () => {
  const [hideDirector, setHideDirector] = React.useState(false);

  const columns = [
    {
      name: "Energizer\n" + "Eveready\n" + "Rayovac",
      selector: "Energizer",
      sortable: true
    },
    {
      name: "Dimensions (MM)",
      selector: "DimensionsMM",
      sortable: true
    },
    {
      name: "Dimensions (IN)",
      selector: "DimensionsIN",
      sortable: true
    },
    {
      name: "I.E.C.",
      selector: "IEC",
      sortable: true
    },
    { name: "AG & SG", selector: "AG", sortable: true },
    { name: "AWI", selector: "AWI", sortable: true },
    { name: "Bulova", selector: "Bulova", sortable: true },
    { name: "Citizen", selector: "Citizen", sortable: true },
    { name: "Duracell", selector: "Duracell", sortable: true },
    { name: "Renata", selector: "Renata", sortable: true },
    { name: "Seiko", selector: "Seiko", sortable: true },
    { name: "Timex", selector: "Timex", sortable: true },
    {
      name: "Maxel\n" + "National\n" + "Panasonic\n" + "Sony\n" + "Toshiba",
      selector: "Maxel",
      sortable: true
    },
    { name: "Varta", selector: "Varta", sortable: true },
    { name: "Vinnic", selector: "Vinnic", sortable: true }
  ];

  const data = [{ id: 1, title: "Conan the Barbarian", year: "1982" }];

  return (
    <>
      <DataTable title="Movie List" columns={columns} data={data} />
    </>
  );
};

export default Table;
