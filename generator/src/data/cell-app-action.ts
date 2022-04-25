import { AppAction } from '../model/application';
import { tables } from './cell-app-table';
import { messages } from './cell-app-message';

const addColumn: AppAction = {
  name: 'add-column-action',
  kind: 'append',
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

const addRow: AppAction = {
  name: 'add-row-action',
  kind: 'append',
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

const addHorizon: AppAction = {
  name: 'add-horizon-action',
  kind: 'append',
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

export const actions = {
  addColumn,
  updateColumn,
  deleteColumn,
  addRow,
  updateRow,
  deleteRow,
  addHorizon,
  updateHorizon,
  deleteHorizon,
  updateCell,
  deleteCell,
};
