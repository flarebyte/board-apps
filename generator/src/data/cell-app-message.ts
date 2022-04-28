import { AppKey, AppMessage } from '../model/application';
import { validations } from './cell-app-validation';
const routing: AppKey[] = [{ name: 'action', validation: validations.action }];

const dimRowParams: AppKey[] = [
  { name: 'title', validation: validations.shortText },
  { name: 'description', validation: validations.freeText },
  { name: 'comment', validation: validations.freeText },
  { name: 'homepage', validation: validations.url },
];

const dimColumnParams: AppKey[] = [
  ...dimRowParams,
  { name: 'unit', validation: validations.shortText, flags: ['optional'] },
  {
    name: 'media-type',
    validation: validations.shortText,
    flags: ['optional'],
  },
];

const dimCellParams: AppKey[] = [
  { name: 'text', validation: validations.freeText, flags: ['optional'] },
  { name: 'comment', validation: validations.freeText, flags: ['optional'] },
  { name: 'unit', validation: validations.shortText, flags: ['optional'] },
  {
    name: 'media-type',
    validation: validations.shortText,
    flags: ['optional'],
  },
];

const dimCellIdsParams: AppKey[] = [
  { name: 'column-id', validation: validations.identifier },
  { name: 'row-id', validation: validations.identifier },
  { name: 'horizon-id', validation: validations.identifier },
];

const dimMetadataParams: AppKey[] = [
  {
    name: 'id-urn',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'account-urn',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'content-url',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'title',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'description',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'license-name',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'license-url',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'author-name',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'author-url',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'attribution-name',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'homepage-url',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'repository-url',
    flags: ['optional'],
    validation: validations.shortText,
  },
  {
    name: 'copyright-year',
    flags: ['optional'],
    validation: validations.shortText,
  },
];
const addColumn: AppMessage = {
  name: 'add-column-message',
  routing,
  headers: [],
  params: dimColumnParams,
};

const dimId = { name: 'id', validation: validations.identifier };
const updateColumn: AppMessage = {
  name: 'update-column-message',
  routing,
  headers: [],
  params: [...dimColumnParams, dimId],
};

const deleteColumn: AppMessage = {
  name: 'delete-column-message',
  routing,
  headers: [],
  params: [dimId],
};

const getColumn: AppMessage = {
  name: 'get-column-message',
  routing,
  headers: [],
  params: [dimId],
};

const searchColumn: AppMessage = {
  name: 'search-column-message',
  routing,
  headers: [],
  params: [{ name: 'text', validation: validations.shortText }],
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
  params: [...dimRowParams, dimId],
};

const deleteRow: AppMessage = {
  name: 'delete-row-message',
  routing,
  headers: [],
  params: [dimId],
};

const getRow: AppMessage = {
  name: 'get-row-message',
  routing,
  headers: [],
  params: [dimId],
};

const searchRow: AppMessage = {
  name: 'search-row-message',
  routing,
  headers: [],
  params: [{ name: 'text', validation: validations.shortText }],
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
  params: [...dimRowParams, dimId],
};

const deleteHorizon: AppMessage = {
  name: 'delete-horizon-message',
  routing,
  headers: [],
  params: [dimId],
};

const getHorizon: AppMessage = {
  name: 'get-horizon-message',
  routing,
  headers: [],
  params: [dimId],
};

const searchHorizon: AppMessage = {
  name: 'search-horizon-message',
  routing,
  headers: [],
  params: [{ name: 'text', validation: validations.shortText }],
};

const updateMetadata: AppMessage = {
  name: 'update-metadata-message',
  routing,
  headers: [],
  params: [...dimMetadataParams],
};

const deleteMetadata: AppMessage = {
  name: 'delete-metadata-message',
  routing,
  headers: [],
  params: [...dimMetadataParams],
};

const getMetadata: AppMessage = {
  name: 'get-metadata-message',
  routing,
  headers: [],
  params: [],
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
  params: [{ name: 'text', validation: validations.shortText }],
};

const importJsonFormat: AppMessage = {
  name: 'import-json-format',
  routing,
  headers: [],
  params: [
    { name: 'filename', validation: validations.filename },
    {
      name: 'mode',
      validation: validations.importJsonMode,
      flags: ['multiple'],
    },
  ],
};

const exportJsonFormat: AppMessage = {
  name: 'export-json-format',
  routing,
  headers: [],
  params: [
    { name: 'filename', validation: validations.filename },
    {
      name: 'mode',
      validation: validations.importJsonMode,
      flags: ['multiple'],
    },
  ],
};

const exportCsvFormat: AppMessage = {
  name: 'export-csv-format',
  routing,
  headers: [],
  params: [
    { name: 'filename', validation: validations.filename },
    {
      name: 'mode',
      validation: validations.importJsonMode,
      flags: ['multiple'],
    },
  ],
};

const publishTelemetry: AppMessage = {
  name: 'publish-telemetry',
  routing,
  headers: [],
  params: [
    {
      name: 'mode',
      validation: validations.telemetryMode,
      flags: ['multiple'],
    },
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
  updateMetadata,
  deleteMetadata,
  getMetadata,
  importJsonFormat,
  exportJsonFormat,
  exportCsvFormat,
  publishTelemetry,
};
