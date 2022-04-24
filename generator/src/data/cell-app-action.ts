import { AppAction } from "../model/application";
import { tables } from "./cell-app-table";
import {
  addColumnMsg,
  addHorizonMsg,
  addRowMsg,
  deleteCellMsg,
  deleteColumnMsg,
  deleteHorizonMsg,
  deleteRowMsg,
  updateCellMsg,
  updateColumnMsg,
  updateHorizonMsg,
  updateRowMsg,
} from "./cell-app-messaging";

export const addColumnAction: AppAction = {
  name: "add-column-action",
  kind: "append",
  inboundMessage: addColumnMsg,
  table: tables.column,
};

export const updateColumnAction: AppAction = {
  name: "update-column-action",
  kind: "update",
  inboundMessage: updateColumnMsg,
  table: tables.column,
};
export const deleteColumnAction: AppAction = {
  name: "delete-column-action",
  kind: "update",
  inboundMessage: deleteColumnMsg,
  table: tables.column,
};

export const addRowAction: AppAction = {
  name: "add-row-action",
  kind: "append",
  inboundMessage: addRowMsg,
  table: tables.row,
};

export const updateRowAction: AppAction = {
  name: "update-row-action",
  kind: "update",
  inboundMessage: updateRowMsg,
  table: tables.row,
};
export const deleteRowAction: AppAction = {
  name: "delete-row-action",
  kind: "update",
  inboundMessage: deleteRowMsg,
  table: tables.row,
};

export const addHorizonAction: AppAction = {
  name: "add-horizon-action",
  kind: "append",
  inboundMessage: addHorizonMsg,
  table: tables.horizon,
};

export const updateHorizonAction: AppAction = {
  name: "update-horizon-action",
  kind: "update",
  inboundMessage: updateHorizonMsg,
  table: tables.horizon,
};
export const deleteHorizonAction: AppAction = {
  name: "delete-horizon-action",
  kind: "update",
  inboundMessage: deleteHorizonMsg,
  table: tables.horizon,
};

export const updateCellAction: AppAction = {
  name: "update-cell-action",
  kind: "update",
  inboundMessage: updateCellMsg,
  table: tables.cell,
};
export const deleteCellAction: AppAction = {
  name: "delete-cell-action",
  kind: "update",
  inboundMessage: deleteCellMsg,
  table: tables.cell,
};
