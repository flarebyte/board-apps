import { AppKey, AppKeyValidation, AppMessage } from '../model/application';
const freeTextCheck: AppKeyValidation = {
  name: 'free-text-validation',
};

const shortTextCheck: AppKeyValidation = {
  name: 'short-text-validation',
};
const idCheck: AppKeyValidation = {
  name: 'idt-validation',
};
const urlCheck: AppKeyValidation = {
  name: 'url-validation',
};

const actionCheck: AppKeyValidation = {
  name: 'action-validation',
};

const routing: AppKey[] = [
  { name: 'action', multiple: false, validation: actionCheck },
];

const dimRowParams: AppKey[] = [
  { name: 'title', multiple: false, validation: shortTextCheck },
  { name: 'description', multiple: false, validation: freeTextCheck },
  { name: 'comment', multiple: false, validation: freeTextCheck },
  { name: 'homepage', multiple: false, validation: urlCheck },
];

const dimColumnParams: AppKey[] = [
  ...dimRowParams,
  { name: 'unit', multiple: false, validation: shortTextCheck },
  { name: 'media-type', multiple: false, validation: shortTextCheck },
];

const dimCellParams: AppKey[] = [
  { name: 'text', multiple: false, validation: freeTextCheck },
  { name: 'comment', multiple: false, validation: freeTextCheck },
  { name: 'unit', multiple: false, validation: shortTextCheck },
  { name: 'media-type', multiple: false, validation: shortTextCheck },
];

const dimCellIdsParams: AppKey[] = [
  { name: 'column-id', multiple: false, validation: idCheck },
  { name: 'row-id', multiple: false, validation: idCheck },
  { name: 'horizon-id', multiple: false, validation: idCheck },
];
const addColumn: AppMessage = {
  name: 'add-column-message',
  routing,
  headers: [],
  params: dimColumnParams,
};

const updateColumn: AppMessage = {
  name: 'update-column-message',
  routing,
  headers: [],
  params: [
    ...dimColumnParams,
    { name: 'id', multiple: false, validation: idCheck },
  ],
};

const deleteColumn: AppMessage = {
  name: 'delete-column-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: idCheck }],
};

const addRow: AppMessage = {
  name: 'add-row-message',
  routing,
  headers: [],
  params: [...dimRowParams],
};

const updateRow: AppMessage = {
  name: 'update-row-message',
  routing,
  headers: [],
  params: [
    ...dimRowParams,
    { name: 'id', multiple: false, validation: idCheck },
  ],
};

const deleteRow: AppMessage = {
  name: 'delete-row-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: idCheck }],
};

const addHorizon: AppMessage = {
  name: 'add-horizon-message',
  routing,
  headers: [],
  params: [...dimRowParams],
};

const updateHorizon: AppMessage = {
  name: 'update-horizon-message',
  routing,
  headers: [],
  params: [
    ...dimRowParams,
    { name: 'id', multiple: false, validation: idCheck },
  ],
};

const deleteHorizon: AppMessage = {
  name: 'delete-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: idCheck }],
};

const updateCell: AppMessage = {
  name: 'update-cell-message',
  routing,
  headers: [],
  params: [...dimCellParams, ...dimCellIdsParams],
};

const deleteCell: AppMessage = {
  name: 'delete-cell-message',
  routing,
  headers: [],
  params: [...dimCellIdsParams],
};

export const messages = {
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
