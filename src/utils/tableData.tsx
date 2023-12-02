// First prop that we want to pass and its type
type ColumnName = {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
};

export const columns: ColumnName[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "left",
  },
  {
    id: "size",
    label: "Size",
    minWidth: 170,
    align: "left",
  },
  {
    id: "density",
    label: "Density",
    minWidth: 50,
    align: "left",
  },
];

// Second prop that we want to pass and its type
type ColumnAttributeMapping = {
  [key: string]:
    | {
        type?: "button" | undefined;
        buttonKind?: "text" | "content" | "mixed";
        buttonVarient?: "text" | "outlined" | "contained";
        text?: string;
      }
    | undefined;
};

export const columnAttributeMapping: ColumnAttributeMapping = {
  name: {},
  code: {},
  population: {},
  size: {
    type: "button",
    buttonKind: "mixed",
    buttonVarient: "outlined",
    text: "Kg",
  },
  density: { type: "button", buttonKind: "text", text: "Edit" },
};

// Third prop that we want
export const tableData = [
  {
    name: "India",
    code: "IN",
    population: 1324171354,
    size: 3287263,
    density: 404,
  },
  {
    name: "China",
    code: "CN",
    population: 1403500365,
    size: 9596961,
    density: 146,
  },
  {
    name: "Italy",
    code: "IT",
    population: 60483973,
    size: 301340,
    density: 201,
  },
  {
    name: "United States",
    code: "US",
    population: 327167434,
    size: 9833520,
    density: 33,
  },
  {
    name: "Canada",
    code: "CA",
    population: 37602103,
    size: 9984670,
    density: 4,
  },
  {
    name: "Australia",
    code: "AU",
    population: 25475400,
    size: 7692024,
    density: 3,
  },
  {
    name: "Germany",
    code: "DE",
    population: 83019200,
    size: 357578,
    density: 232,
  },
  {
    name: "Ireland",
    code: "IE",
    population: 4857000,
    size: 70273,
    density: 69,
  },
  {
    name: "Mexico",
    code: "MX",
    population: 126577691,
    size: 1972550,
    density: 64,
  },
  {
    name: "Japan",
    code: "JP",
    population: 126317000,
    size: 377973,
    density: 334,
  },
  {
    name: "France",
    code: "FR",
    population: 67022000,
    size: 640679,
    density: 105,
  },
  {
    name: "United Kingdom",
    code: "GB",
    population: 67545757,
    size: 242495,
    density: 278,
  },
  {
    name: "Russia",
    code: "RU",
    population: 146793744,
    size: 17098246,
    density: 9,
  },
  {
    name: "Nigeria",
    code: "NG",
    population: 200962417,
    size: 923768,
    density: 218,
  },
  {
    name: "Brazil",
    code: "BR",
    population: 210147125,
    size: 8515767,
    density: 25,
  },
];
