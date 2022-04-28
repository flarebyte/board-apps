import { AppKey, AppMessage } from '../model/application';
import { validations } from './cell-app-validation';

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

const dimPreferenceParams: AppKey[] = [
  {
    name: 'theme-urn',
    flags: ['optional'],
    validation: validations.shortText,
  },
];
const addColumn: AppMessage = {
  name: 'add-column-message',
  action: 'add-column-action',
  params: dimColumnParams,
};

const dimId = { name: 'id', validation: validations.identifier };
const updateColumn: AppMessage = {
  name: 'update-column-message',
  action: 'update-column-action',
  params: [...dimColumnParams, dimId],
};

const deleteColumn: AppMessage = {
  name: 'delete-column-message',
  action: 'delete-column-action',
  params: [dimId],
};

const getColumn: AppMessage = {
  name: 'get-column-message',
  action: 'get-column-action',
  params: [dimId],
};

const searchColumn: AppMessage = {
  name: 'search-column-message',
  action: 'search-column-action',
  params: [{ name: 'text', validation: validations.shortText }],
};
const addRow: AppMessage = {
  name: 'add-row-message',
  action: 'add-row-action',
  params: [...dimRowParams],
};

const updateRow: AppMessage = {
  name: 'update-row-message',
  action: 'update-row-action',
  params: [...dimRowParams, dimId],
};

const deleteRow: AppMessage = {
  name: 'delete-row-message',
  action: 'delete-row-action',
  params: [dimId],
};

const getRow: AppMessage = {
  name: 'get-row-message',
  action: 'get-row-action',
  params: [dimId],
};

const searchRow: AppMessage = {
  name: 'search-row-message',
  action: 'search-row-action',
  params: [{ name: 'text', validation: validations.shortText }],
};

const addHorizon: AppMessage = {
  name: 'add-horizon-message',
  action: 'add-horizon-action',
  params: [...dimRowParams],
};

const updateHorizon: AppMessage = {
  name: 'update-horizon-message',
  action: 'update-horizon-action',
  params: [...dimRowParams, dimId],
};

const deleteHorizon: AppMessage = {
  name: 'delete-horizon-message',
  action: 'delete-horizon-action',
  params: [dimId],
};

const getHorizon: AppMessage = {
  name: 'get-horizon-message',
  action: 'get-horizon-action',
  params: [dimId],
};

const searchHorizon: AppMessage = {
  name: 'search-horizon-message',
  action: 'search-horizon-action',
  params: [{ name: 'text', validation: validations.shortText }],
};

const updateMetadata: AppMessage = {
  name: 'update-metadata-message',
  action: 'update-metadata-action',
  params: [...dimMetadataParams],
};

const deleteMetadata: AppMessage = {
  name: 'delete-metadata-message',
  action: 'delete-metadata-action',
  params: [...dimMetadataParams],
};

const getMetadata: AppMessage = {
  name: 'get-metadata-message',
  action: 'get-metadata-action',
  params: [],
};

const updatePreference: AppMessage = {
  name: 'update-preference-message',
  action: 'update-preference-action',
  params: [...dimPreferenceParams],
};

const deletePreference: AppMessage = {
  name: 'delete-preference-message',
  action: 'delete-preference-action',
  params: [...dimPreferenceParams],
};

const getPreference: AppMessage = {
  name: 'get-preference-message',
  action: 'get-preference-action',
  params: [],
};

const updateCell: AppMessage = {
  name: 'update-cell-message',
  action: 'update-cell-action',
  params: [...dimCellParams, ...dimCellIdsParams],
};

const deleteCell: AppMessage = {
  name: 'delete-cell-message',
  action: 'delete-cell-action',
  params: [...dimCellIdsParams],
};

const getCell: AppMessage = {
  name: 'get-cell-message',
  action: 'get-cell-action',
  params: [...dimCellIdsParams],
};

const searchCell: AppMessage = {
  name: 'search-cell-message',
  action: 'search-cell-action',
  params: [{ name: 'text', validation: validations.shortText }],
};

const importJsonFormat: AppMessage = {
  name: 'import-json-format-message',
  action: 'import-json-format-action',
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
  name: 'export-json-format-message',
  action: 'export-json-format-action',
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
  name: 'export-csv-format-message',
  action: 'export-csv-format-action',
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
  name: 'publish-telemetry-message',
  action: 'publish-telemetry-action',
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
  updatePreference,
  deletePreference,
  getPreference,
  importJsonFormat,
  exportJsonFormat,
  exportCsvFormat,
  publishTelemetry,
};
