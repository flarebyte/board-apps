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
  editPreference,
  importJsonFormat,
  exportJsonFormat,
  exportCsvFormat,
  searchQuest,
};
