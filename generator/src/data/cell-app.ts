import {
  AppDocManager,
  AppDocument,
  Ownership,
  WebApplication,
} from '../model/application';
import { actions } from './cell-app-action';
import { tables } from './cell-app-table';

const ownership: Ownership = {
  copyright: '(c) 2022 Flarebyte.com Ltd',
  companyName: 'Flarebyte.com Ltd',
  companyHomepage: 'https://flarebyte.com',
};

const cellDoc: AppDocument = {
  name: 'cell-doc',
  tables: [
    tables.column,
    tables.row,
    tables.horizon,
    tables.cell,
    tables.metadata,
  ],
};

const profileDoc: AppDocument = {
  name: 'profile-doc',
  tables: [tables.preference],
};

const cellDocManager: AppDocManager = {
  name: 'cell-doc-manager',
  filenameExtension: 'cell.json',
  zipFilenameExtension: 'cell.json.gz',
  document: cellDoc,
  actions: [
    actions.addColumn,
    actions.updateColumn,
    actions.deleteColumn,
    actions.addRow,
    actions.updateRow,
    actions.deleteRow,
    actions.addHorizon,
    actions.updateHorizon,
    actions.deleteHorizon,
    actions.updateMetadata,
    actions.deleteMetadata,
    actions.getMetadata,
    actions.updateCell,
    actions.deleteCell,
  ],
};

const profileDocManager: AppDocManager = {
  name: 'profile-doc-manager',
  filenameExtension: 'profile.json',
  zipFilenameExtension: 'profile.json.gz',
  document: profileDoc,
  actions: [],
};

export const easyCellApp: WebApplication = {
  name: 'easy-cell-app',
  domain: 'easy-cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager, profileDocManager],
};

export const premiumCellApp: WebApplication = {
  name: 'premium-cell-app',
  domain: 'cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager, profileDocManager],
};
