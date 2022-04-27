import { AppKey, AppMessage } from '../model/application';
import { validations } from './cell-app-validation';
const routing: AppKey[] = [
  { name: 'action', multiple: false, validation: validations.action },
];

const dimRowParams: AppKey[] = [
  { name: 'title', multiple: false, validation: validations.shortText },
  { name: 'description', multiple: false, validation: validations.freeText },
  { name: 'comment', multiple: false, validation: validations.freeText },
  { name: 'homepage', multiple: false, validation: validations.url },
];

const dimColumnParams: AppKey[] = [
  ...dimRowParams,
  { name: 'unit', multiple: false, validation: validations.shortText },
  { name: 'media-type', multiple: false, validation: validations.shortText },
];

const dimCellParams: AppKey[] = [
  { name: 'text', multiple: false, validation: validations.freeText },
  { name: 'comment', multiple: false, validation: validations.freeText },
  { name: 'unit', multiple: false, validation: validations.shortText },
  { name: 'media-type', multiple: false, validation: validations.shortText },
];

const dimCellIdsParams: AppKey[] = [
  { name: 'column-id', multiple: false, validation: validations.identifier },
  { name: 'row-id', multiple: false, validation: validations.identifier },
  { name: 'horizon-id', multiple: false, validation: validations.identifier },
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
    { name: 'id', multiple: false, validation: validations.identifier },
  ],
};

const deleteColumn: AppMessage = {
  name: 'delete-column-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: validations.identifier }],
};

const getColumn: AppMessage = {
  name: 'get-column-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: validations.identifier }],
};

const searchColumn: AppMessage = {
  name: 'search-column-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: validations.shortText }],
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
    { name: 'id', multiple: false, validation: validations.identifier },
  ],
};

const deleteRow: AppMessage = {
  name: 'delete-row-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: validations.identifier }],
};

const getRow: AppMessage = {
  name: 'get-row-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: validations.identifier }],
};

const searchRow: AppMessage = {
  name: 'search-row-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: validations.shortText }],
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
    { name: 'id', multiple: false, validation: validations.identifier },
  ],
};

const deleteHorizon: AppMessage = {
  name: 'delete-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: validations.identifier }],
};

const getHorizon: AppMessage = {
  name: 'get-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'id', multiple: false, validation: validations.identifier }],
};

const searchHorizon: AppMessage = {
  name: 'search-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'text', multiple: false, validation: validations.shortText }],
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
  params: [{ name: 'text', multiple: false, validation: validations.shortText }],
};

const importJsonFormat: AppMessage = {
  name: 'import-json-format',
  routing,
  headers: [],
  params: [
    { name: 'filename', multiple: false, validation: validations.filename },
    { name: 'mode', multiple: true, validation: validations.importJsonMode },
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
