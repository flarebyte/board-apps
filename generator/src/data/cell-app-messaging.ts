import { AppAction, AppKey, AppKeyValidation, AppMessage } from "../model/application";
import { columnTable } from "./cell-app-table";
const freeTextCheck: AppKeyValidation = {
  name: "free-text-validation",
};

const shortTextCheck: AppKeyValidation = {
  name: "short-text-validation",
};
const idCheck: AppKeyValidation = {
  name: "idt-validation",
};
const urlCheck: AppKeyValidation = {
  name: "url-validation",
};

const actionCheck: AppKeyValidation = {
  name: "action-validation",
};

const routing: AppKey[] = [
  { name: "action", multiple: false, validation: actionCheck },
];

const dimColumnParams: AppKey[] = [
  { name: "title", multiple: false, validation: shortTextCheck },
  { name: "description", multiple: false, validation: freeTextCheck },
  { name: "comment", multiple: false, validation: freeTextCheck },
  { name: "homepage", multiple: false, validation: urlCheck },
];
const addColumnMsg: AppMessage = {
  name: "add-column-message",
  routing,
  headers: [],
  params: [...dimColumnParams],
};

const updateColumnMsg: AppMessage = {
  name: "update-column-message",
  routing,
  headers: [],
  params: [
    ...dimColumnParams,
    { name: "id", multiple: false, validation: idCheck },
  ],
};

const deleteColumnMsg: AppMessage = {
    name: "delete-column-message",
    routing,
    headers: [],
    params: [
      { name: "id", multiple: false, validation: idCheck },
    ],
  };

  const addColumnAction: AppAction = {
        name: 'add-column-action',
        kind: 'append',
        inboundMessage: addColumnMsg,
        table: columnTable
      
  }