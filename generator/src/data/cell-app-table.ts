import { AppColumn, AppTable } from "../model/application";

const dimRow: AppColumn[] = [
  {
    name: "id",
  },
  {
    name: "title",
  },
  {
    name: "description",
  },
  {
    name: "comment",
  },
  {
    name: "homepage",
  },
];
const columnTable: AppTable = {
  name: "column-table",
  columns: [
    ...dimRow,
    {
      name: "unit",
    },
    {
      name: "media-type",
    },
  ],
};
const rowTable: AppTable = {
  name: "row-table",
  columns: dimRow,
};
const horizonTable: AppTable = {
  name: "horizon-table",
  columns: dimRow,
};
const cellTable: AppTable = {
  name: "cell-table",
  columns: [
    {
      name: "column-id",
    },
    {
      name: "row-id",
    },
    {
      name: "horizon-id",
    },
    {
      name: "text",
    },
    {
      name: "unit",
    },
    {
      name: "media-type",
    },
    {
      name: "comment",
    },
  ],
};

export const tables = {
  column: columnTable,
  row: rowTable,
  horizon: horizonTable,
  cell: cellTable,
};
