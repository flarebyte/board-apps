import { AppKey, AppMessage } from '../model/application';
import { messageKeys } from './cell-app-message-key';
import { validations } from './cell-app-validation';

const dimRowParams: AppKey[] = [
  messageKeys.title,
  messageKeys.description,
  messageKeys.comment,
  messageKeys.homepage,
];

const dimColumnParams: AppKey[] = [
  ...dimRowParams,
  messageKeys.unit,
  messageKeys.mediaType,
];

const dimCellParams: AppKey[] = [
  messageKeys.text,
  messageKeys.comment,
  messageKeys.unit,
  messageKeys.mediaType,
];

const dimCellIdsParams: AppKey[] = [
  messageKeys.columnId,
  messageKeys.rowId,
  messageKeys.horizonId,
];

const dimMetadataParams: AppKey[] = [
  messageKeys.idUrn,
  messageKeys.accountUrn,
  messageKeys.contentUrl,
  messageKeys.title,
  messageKeys.description,
  messageKeys.licenseName,
  messageKeys.licenseUrl,
  messageKeys.authorName,
  messageKeys.authorUrl,
  messageKeys.attributionName,
  messageKeys.homepageUrl,
  messageKeys.repositoryUrl,
  messageKeys.copyrightYear,
];

const dimPreferenceParams: AppKey[] = [messageKeys.themeUrn];
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

const searchQuest: AppMessage = {
  name: 'search-quest-message',
  action: 'search-quest-action',
  params: [{ name: 'text', validation: validations.shortText }],
};

const getTopic: AppMessage = {
  name: 'get-topic-message',
  action: 'get-topic-action',
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
  searchQuest,
  getTopic,
  importJsonFormat,
  exportJsonFormat,
  exportCsvFormat,
  publishTelemetry,
};
