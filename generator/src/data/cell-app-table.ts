import { createScratchNote, ScratchBook } from 'scratchbook';
import { AppColumn, AppTable } from '../model/application';

const dimRow: AppColumn[] = [
  {
    name: 'id',
  },
  {
    name: 'title',
  },
  {
    name: 'description',
  },
  {
    name: 'comment',
  },
  {
    name: 'homepage',
  },
];
const columnTable: AppTable = {
  name: 'column-table',
  columns: [
    ...dimRow,
    {
      name: 'unit',
    },
    {
      name: 'media-type',
    },
  ],
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
    {
      name: 'column-id',
    },
    {
      name: 'row-id',
    },
    {
      name: 'horizon-id',
    },
    {
      name: 'text',
    },
    {
      name: 'unit',
    },
    {
      name: 'media-type',
    },
    {
      name: 'comment',
    },
  ],
};

export const tables = {
  column: columnTable,
  row: rowTable,
  horizon: horizonTable,
  cell: cellTable,
};

const tableList = [columnTable, rowTable, horizonTable, cellTable];

const createDescriptionNote = (appTable: AppTable) =>
  createScratchNote(
    `table/${appTable.name}/description`,
    `A table representing the metadata for a ${appTable.name} in the spreadsheet`
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
