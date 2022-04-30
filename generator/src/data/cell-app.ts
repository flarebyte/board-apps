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

const questDoc: AppDocument = {
  name: 'quest-doc',
  tables: [tables.quest, tables.topic],
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
    actions.publishCellDoc,
  ],
};

const profileDocManager: AppDocManager = {
  name: 'profile-doc-manager',
  filenameExtension: 'profile.json',
  zipFilenameExtension: 'profile.json.gz',
  document: profileDoc,
  actions: [actions.publishTelemetry],
};

const questDocManager: AppDocManager = {
  name: 'quest-doc-manager',
  filenameExtension: 'quest.json',
  zipFilenameExtension: 'quest.json.gz',
  document: questDoc,
  actions: [],
};

// @link https://en.wikipedia.org/wiki/Allium

export const easyCellAppAllium: WebApplication = {
  name: 'easy-cell-app-allium',
  domain: 'easy-cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager, profileDocManager],
};

export const premiumCellAppAllium: WebApplication = {
  name: 'premium-cell-app-allium',
  domain: 'cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager, profileDocManager, questDocManager],
};

// @link https://en.wikipedia.org/wiki/Monarda

export const easyCellAppBergamot: WebApplication = {
  name: 'easy-cell-app-bergamot',
  domain: 'easy-cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager, profileDocManager],
};

export const premiumCellAppBergamot: WebApplication = {
  name: 'premium-cell-app-bergamot',
  domain: 'cell.flarebyte.com',
  ownership,
  docManagers: [cellDocManager, profileDocManager, questDocManager],
};
