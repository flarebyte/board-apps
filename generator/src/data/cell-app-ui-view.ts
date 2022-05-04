import { AppInterfaceView } from '../model/application';
import { actions } from './cell-app-action';
import { uiAttributes } from './cell-app-ui-attribute';

const editColumn: AppInterfaceView = {
  name: 'edit-column-view',
  kind: 'edit-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getColumn,
  addAction: actions.addColumn,
  updateAction: actions.updateColumn,
  deleteAction: actions.deleteColumn,
};

const searchColumn: AppInterfaceView = {
  name: 'search-column-view',
  kind: 'search-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  searchAction: actions.searchColumn,
};

const editRow: AppInterfaceView = {
  name: 'edit-row-view',
  kind: 'edit-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getRow,
  addAction: actions.addRow,
  updateAction: actions.updateRow,
  deleteAction: actions.deleteRow,
};

const searchRow: AppInterfaceView = {
  name: 'search-row-view',
  kind: 'search-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  searchAction: actions.searchRow,
};

const editHorizon: AppInterfaceView = {
  name: 'edit-horizon-view',
  kind: 'edit-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getHorizon,
  addAction: actions.addHorizon,
  updateAction: actions.updateHorizon,
  deleteAction: actions.deleteHorizon,
};

const searchHorizon: AppInterfaceView = {
  name: 'search-horizon-view',
  kind: 'search-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  searchAction: actions.searchHorizon,
};

const editCell: AppInterfaceView = {
  name: 'edit-cell-view',
  kind: 'edit-cell',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getCell,
  updateAction: actions.updateCell,
  deleteAction: actions.deleteCell,
};

const searchCell: AppInterfaceView = {
  name: 'search-cell-view',
  kind: 'search-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  searchAction: actions.searchCell,
};

const editPreference: AppInterfaceView = {
  name: 'edit-preference-view',
  kind: 'edit-single-row-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getPreference,
  updateAction: actions.updatePreference,
  deleteAction: actions.deletePreference,
};

const editMetadata: AppInterfaceView = {
  name: 'edit-metadata-view',
  kind: 'edit-single-row-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getMetadata,
  updateAction: actions.updateMetadata,
  deleteAction: actions.deleteMetadata,
};

const getTopic: AppInterfaceView = {
  name: 'get-topic-view',
  kind: 'read-only-table',
  attributes: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
    uiAttributes.mediaType,
    uiAttributes.unit,
  ],
  getAction: actions.getTopic,
};

const importJsonFormat: AppInterfaceView = {
  name: 'import-json-format-view',
  kind: 'single-action',
  attributes: [uiAttributes.title],
  action: actions.importJsonFormat,
};

const exportJsonFormat: AppInterfaceView = {
  name: 'export-json-format-view',
  kind: 'single-action',
  attributes: [uiAttributes.title],
  action: actions.exportJsonFormat,
};

const exportCsvFormat: AppInterfaceView = {
  name: 'export-csv-format-view',
  kind: 'single-action',
  attributes: [uiAttributes.title],
  action: actions.exportCsvFormat,
};

const searchQuest: AppInterfaceView = {
  name: 'search-quest-view',
  kind: 'remote-search',
  attributes: [uiAttributes.title],
  searchAction: actions.searchQuest,
};
export const uiViews = {
  editColumn,
  searchColumn,
  editRow,
  searchRow,
  editHorizon,
  searchHorizon,
  editCell,
  searchCell,
  editMetadata,
  editPreference,
  getTopic,
  importJsonFormat,
  exportJsonFormat,
  exportCsvFormat,
  searchQuest,
};
