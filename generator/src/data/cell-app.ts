import {
  AppDocManager,
  AppDocument,
  Ownership,
  WebApplication,
} from "../model/application";
import { columnTable, rowTable, horizonTable, cellTable } from "./cell-app-table";

const ownership: Ownership = {
  copyright: "(c) 2022 Flarebyte.com Ltd",
  companyName: "Flarebyte.com Ltd",
  companyHomepage: "https://flarebyte.com",
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
