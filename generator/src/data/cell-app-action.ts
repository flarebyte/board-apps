import { AppAction } from '../model/application';
import { tables } from './cell-app-table';
import { messages } from './cell-app-message';

const addColumn: AppAction = {
  name: 'add-column-action',
  kind: 'add',
  inboundMessage: messages.addColumn,
  table: tables.column,
};

const updateColumn: AppAction = {
  name: 'update-column-action',
  kind: 'update',
  inboundMessage: messages.updateColumn,
  table: tables.column,
};

const deleteColumn: AppAction = {
  name: 'delete-column-action',
  kind: 'delete',
  inboundMessage: messages.deleteColumn,
  table: tables.column,
};
const getColumn: AppAction = {
  name: 'get-column-action',
  kind: 'get',
  inboundMessage: messages.getColumn,
  table: tables.column,
};

const searchColumn: AppAction = {
  name: 'search-column-action',
  kind: 'search',
  inboundMessage: messages.searchColumn,
  table: tables.column,
};

const addRow: AppAction = {
  name: 'add-row-action',
  kind: 'add',
  inboundMessage: messages.addRow,
  table: tables.row,
};

const updateRow: AppAction = {
  name: 'update-row-action',
  kind: 'update',
  inboundMessage: messages.updateRow,
  table: tables.row,
};
const deleteRow: AppAction = {
  name: 'delete-row-action',
  kind: 'delete',
  inboundMessage: messages.deleteRow,
  table: tables.row,
};
const getRow: AppAction = {
  name: 'get-row-action',
  kind: 'get',
  inboundMessage: messages.getRow,
  table: tables.row,
};

const searchRow: AppAction = {
  name: 'search-row-action',
  kind: 'search',
  inboundMessage: messages.searchRow,
  table: tables.row,
};

const addHorizon: AppAction = {
  name: 'add-horizon-action',
  kind: 'add',
  inboundMessage: messages.addHorizon,
  table: tables.horizon,
};

const updateHorizon: AppAction = {
  name: 'update-horizon-action',
  kind: 'update',
  inboundMessage: messages.updateHorizon,
  table: tables.horizon,
};
const deleteHorizon: AppAction = {
  name: 'delete-horizon-action',
  kind: 'delete',
  inboundMessage: messages.deleteHorizon,
  table: tables.horizon,
};
const getHorizon: AppAction = {
  name: 'get-horizon-action',
  kind: 'get',
  inboundMessage: messages.getHorizon,
  table: tables.horizon,
};

const searchHorizon: AppAction = {
  name: 'search-horizon-action',
  kind: 'search',
  inboundMessage: messages.searchHorizon,
  table: tables.horizon,
};

const updateMetadata: AppAction = {
  name: 'update-metadata-action',
  kind: 'update',
  inboundMessage: messages.updateMetadata,
  table: tables.metadata,
};
const deleteMetadata: AppAction = {
  name: 'delete-metadata-action',
  kind: 'delete',
  inboundMessage: messages.deleteMetadata,
  table: tables.metadata,
};
const getMetadata: AppAction = {
  name: 'get-metadata-action',
  kind: 'get',
  inboundMessage: messages.getMetadata,
  table: tables.metadata,
};

const updatePreference: AppAction = {
  name: 'update-preference-action',
  kind: 'update',
  inboundMessage: messages.updatePreference,
  table: tables.preference,
};
const deletePreference: AppAction = {
  name: 'delete-preference-action',
  kind: 'delete',
  inboundMessage: messages.deletePreference,
  table: tables.preference,
};
const getPreference: AppAction = {
  name: 'get-preference-action',
  kind: 'get',
  inboundMessage: messages.getPreference,
  table: tables.preference,
};

const updateCell: AppAction = {
  name: 'update-cell-action',
  kind: 'update',
  inboundMessage: messages.updateCell,
  table: tables.cell,
};
const deleteCell: AppAction = {
  name: 'delete-cell-action',
  kind: 'delete',
  inboundMessage: messages.deleteCell,
  table: tables.cell,
};

const getCell: AppAction = {
  name: 'get-cell-action',
  kind: 'get',
  inboundMessage: messages.getCell,
  table: tables.cell,
};

const searchCell: AppAction = {
  name: 'search-cell-action',
  kind: 'search',
  inboundMessage: messages.searchCell,
  table: tables.cell,
};

const importJsonFormat: AppAction = {
  name: 'import-json-format-action',
  kind: 'custom-action',
  inboundMessage: messages.importJsonFormat,
};

const exportJsonFormat: AppAction = {
  name: 'export-json-format-action',
  kind: 'custom-action',
  inboundMessage: messages.exportJsonFormat,
};

const exportCsvFormat: AppAction = {
  name: 'export-csv-format-action',
  kind: 'custom-action',
  inboundMessage: messages.exportCsvFormat,
};
export const actions = {
  addColumn,
  updateColumn,
  deleteColumn,
  getColumn,
  searchColumn,
  addRow,
  updateRow,
  deleteRow,
  getRow,
  searchRow,
  addHorizon,
  updateHorizon,
  deleteHorizon,
  getHorizon,
  searchHorizon,
  updateMetadata,
  deleteMetadata,
  getMetadata,
  updatePreference,
  deletePreference,
  getPreference,
  updateCell,
  deleteCell,
  getCell,
  searchCell,
  importJsonFormat,
  exportJsonFormat,
  exportCsvFormat,
};
