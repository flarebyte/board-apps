import { AppAction } from '../model/application';
import { tables } from './cell-app-table';
import { messages } from './cell-app-message';

export const addColumnAction: AppAction = {
  name: 'add-column-action',
  kind: 'append',
  inboundMessage: messages.addColumn,
  table: tables.column,
};

export const updateColumnAction: AppAction = {
  name: 'update-column-action',
  kind: 'update',
  inboundMessage: messages.updateColumn,
  table: tables.column,
};
export const deleteColumnAction: AppAction = {
  name: 'delete-column-action',
  kind: 'delete',
  inboundMessage: messages.deleteColumn,
  table: tables.column,
};

export const addRowAction: AppAction = {
  name: 'add-row-action',
  kind: 'append',
  inboundMessage: messages.addRow,
  table: tables.row,
};

export const updateRowAction: AppAction = {
  name: 'update-row-action',
  kind: 'update',
  inboundMessage: messages.updateRow,
  table: tables.row,
};
export const deleteRowAction: AppAction = {
  name: 'delete-row-action',
  kind: 'delete',
  inboundMessage: messages.deleteRow,
  table: tables.row,
};

export const addHorizonAction: AppAction = {
  name: 'add-horizon-action',
  kind: 'append',
  inboundMessage: messages.addHorizon,
  table: tables.horizon,
};

export const updateHorizonAction: AppAction = {
  name: 'update-horizon-action',
  kind: 'update',
  inboundMessage: messages.updateHorizon,
  table: tables.horizon,
};
export const deleteHorizonAction: AppAction = {
  name: 'delete-horizon-action',
  kind: 'delete',
  inboundMessage: messages.deleteHorizon,
  table: tables.horizon,
};

export const updateCellAction: AppAction = {
  name: 'update-cell-action',
  kind: 'update',
  inboundMessage: messages.updateCell,
  table: tables.cell,
};
export const deleteCellAction: AppAction = {
  name: 'delete-cell-action',
  kind: 'delete',
  inboundMessage: messages.deleteCell,
  table: tables.cell,
};
