import { AppAction } from "../model/application";
import { columnTable } from "./cell-app-table";
import {
  addColumnMsg,
  deleteColumnMsg,
  updateColumnMsg,
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
