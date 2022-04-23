import {
  AppColumn,
  AppDocManager,
  AppDocument,
  AppTable,
  Ownership,
  WebApplication,
} from "../model/application";

const ownership: Ownership = {
  copyright: "(c) 2022 Flarebyte.com Ltd",
  companyName: "Flarebyte.com Ltd",
  companyHomepage: "https://flarebyte.com",
};

const dimColumns: AppColumn[] = [
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
    ...dimColumns,
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
  columns: dimColumns,
};

const horizonTable: AppTable = {
  name: "horizon-table",
  columns: dimColumns,
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

const cellDoc: AppDocument = {
  name: "cell-doc",
  tables: [columnTable, rowTable, horizonTable, cellTable],
};

const cellDocManager: AppDocManager = {
  name: "cell-doc-manager",
  filenameExtension: "cell.json",
  zipFilenameExtension: "cell.json.gz",
  document: cellDoc,
  actions: [],
};

export const easyCellApp: WebApplication = {
  name: "easy-cell-app",
  domain: "easy-cell.flarebyte.com",
  ownership,
  docManagers: [cellDocManager],
};

export const premiumCellApp: WebApplication = {
  name: "premium-cell-app",
  domain: "cell.flarebyte.com",
  ownership,
  docManagers: [cellDocManager],
};
