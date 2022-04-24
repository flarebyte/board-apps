import { AppAction } from "../model/application";
import { columnTable, rowTable } from "./cell-app-table";
import {
  addColumnMsg,
  addHorizonMsg,
  addRowMsg,
  deleteColumnMsg,
  deleteHorizonMsg,
  deleteRowMsg,
  updateColumnMsg,
  updateHorizonMsg,
  updateRowMsg,
} from "./cell-app-messaging";

export const addColumnAction: AppAction = {
  name: "add-column-action",
  kind: "append",
  inboundMessage: addColumnMsg,
  table: columnTable,
};

export const updateColumnAction: AppAction = {
  name: "update-column-action",
  kind: "update",
  inboundMessage: updateColumnMsg,
  table: columnTable,
};
export const deleteColumnAction: AppAction = {
  name: "delete-column-action",
  kind: "update",
  inboundMessage: deleteColumnMsg,
  table: columnTable,
};

export const addRowAction: AppAction = {
  name: "add-row-action",
  kind: "append",
  inboundMessage: addRowMsg,
  table: rowTable,
};

export const updateRowAction: AppAction = {
  name: "update-row-action",
  kind: "update",
  inboundMessage: updateRowMsg,
  table: rowTable,
};
export const deleteRowAction: AppAction = {
  name: "delete-row-action",
  kind: "update",
  inboundMessage: deleteRowMsg,
  table: rowTable,
};

export const addHorizonAction: AppAction = {
  name: "add-horizon-action",
  kind: "append",
  inboundMessage: addHorizonMsg,
  table: rowTable,
};

export const updateHorizonAction: AppAction = {
  name: "update-horizon-action",
  kind: "update",
  inboundMessage: updateHorizonMsg,
  table: rowTable,
};
export const deleteHorizonAction: AppAction = {
  name: "delete-horizon-action",
  kind: "update",
  inboundMessage: deleteHorizonMsg,
  table: rowTable,
};
