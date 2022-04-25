import {
  AppDocManager,
  AppDocument,
  Ownership,
  WebApplication,
} from '../model/application';
import { addColumnAction } from './cell-app-action';
import { tables } from './cell-app-table';

const ownership: Ownership = {
  copyright: '(c) 2022 Flarebyte.com Ltd',
  companyName: 'Flarebyte.com Ltd',
  companyHomepage: 'https://flarebyte.com',
};

const cellDoc: AppDocument = {
  name: 'cell-doc',
  tables: [tables.column, tables.row, tables.horizon, tables.cell],
};

const cellDocManager: AppDocManager = {
  name: 'cell-doc-manager',
  filenameExtension: 'cell.json',
  zipFilenameExtension: 'cell.json.gz',
  document: cellDoc,
  actions: [addColumnAction],
};

export const easyCellApp: WebApplication = {
  name: 'easy-cell-app',
  domain: 'easy-cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager],
};

export const premiumCellApp: WebApplication = {
  name: 'premium-cell-app',
  domain: 'cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager],
};
