import { createScratchNote, ScratchBook } from 'scratchbook';
import { AppColumn, AppTable } from '../model/application';
import { columns, dimRow } from './cell-app-table-key';

const columnTable: AppTable = {
  name: 'column-table',
  columns: [...dimRow, columns.unit, columns.mediaType],
};
const rowTable: AppTable = {
  name: 'row-table',
  columns: dimRow,
};
const horizonTable: AppTable = {
  name: 'horizon-table',
  columns: dimRow,
};
const cellTable: AppTable = {
  name: 'cell-table',
  columns: [
    columns.columnId,
    columns.rowId,
    columns.horizonId,
    columns.text,
    columns.unit,
    columns.mediaType,
    columns.comment,
  ],
};

const metadataTable: AppTable = {
  name: 'metadata-table',
  columns: [
    columns.idUrn,
    columns.accountUrn,
    columns.title,
    columns.description,
    columns.contentUrl,
    columns.licenseName,
    columns.licenseUrl,
    columns.authorName,
    columns.authorUrl,
    columns.attributionName,
    columns.homepageUrl,
    columns.repositoryUrl,
    columns.copyrightYear,
  ],
};

const preferenceTable: AppTable = {
  name: 'preference-table',
  columns: [columns.themeUrn, columns.telemetryMode],
};

const questTable: AppTable = {
  name: 'quest-table',
  columns: [
    columns.idUrn,
    columns.accountUrn,
    columns.title,
    columns.topicUrnList,
  ],
};

const topicTable: AppTable = {
  name: 'topic-table',
  columns: [columns.idUrn, columns.title],
};

export const tables = {
  column: columnTable,
  row: rowTable,
  horizon: horizonTable,
  cell: cellTable,
  metadata: metadataTable,
  preference: preferenceTable,
  quest: questTable,
  topic: topicTable,
};

const tableList = [
  columnTable,
  rowTable,
  horizonTable,
  cellTable,
  metadataTable,
  preferenceTable,
  questTable,
  topicTable,
];

const createDescriptionNote = (appTable: AppTable) =>
  createScratchNote(
    `table/${appTable.name}/description`,
    `A table representing the fields for a ${appTable.name} in the spreadsheet`
  );

const createFieldDescriptionNote = (appTable: AppTable, appColumn: AppColumn) =>
  createScratchNote(
    `table-field/${appTable.name}/${appColumn.name}/description`,
    `A field representing a ${appColumn.name} in the table ${appTable.name}`
  );

const tableDescriptions = tableList.map(createDescriptionNote);

const tableFieldDescriptions = tableList.flatMap((table) =>
  table.columns.map((col) => createFieldDescriptionNote(table, col))
);
export const tableScratchBook: ScratchBook = {
  notes: [...tableDescriptions, ...tableFieldDescriptions],
};
