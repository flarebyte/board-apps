import { AppAction } from "../model/application";
import { columnTable } from "./cell-app-table";
import { addColumnMsg } from "./cell-app-messaging";

export const addColumnAction: AppAction = {
  name: 'add-column-action',
  kind: 'append',
  inboundMessage: addColumnMsg,
  table: columnTable
};
