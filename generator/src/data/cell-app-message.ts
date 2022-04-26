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

const filenameCheck: AppKeyValidation = {
  name: 'filename-validation',
};

const importJsonModeCheck: AppKeyValidation = {
  name: 'import-json-mode-validation',
  choices: ['everything', 'column', 'row', 'horizon'],
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

const getColumn: AppMessage = {
  name: 'get-column-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: idCheck }],
};

const searchColumn: AppMessage = {
  name: 'search-column-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: shortTextCheck }],
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

const getRow: AppMessage = {
  name: 'get-row-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: idCheck }],
};

const searchRow: AppMessage = {
  name: 'search-row-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: shortTextCheck }],
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

const getHorizon: AppMessage = {
  name: 'get-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: idCheck }],
};

const searchHorizon: AppMessage = {
  name: 'search-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: shortTextCheck }],
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

const getCell: AppMessage = {
  name: 'get-cell-message',
  routing,
  headers: [],
  params: [...dimCellIdsParams],
};

const searchCell: AppMessage = {
  name: 'search-cell-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: shortTextCheck }],
};

const importJsonFormat: AppMessage = {
  name: 'import-json-format',
  routing,
  headers: [],
  params: [
    { name: 'filename', multiple: false, validation: filenameCheck },
    { name: 'mode', multiple: true, validation: importJsonModeCheck },
  ],
};

export const messages = {
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
  updateCell,
  deleteCell,
  getCell,
  searchCell,
  importJsonFormat,
};
