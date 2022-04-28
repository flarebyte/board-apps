import { createScratchNote, ScratchBook } from 'scratchbook';
import { AppColumn, AppTable } from '../model/application';

const dimRow: AppColumn[] = [
  {
    name: 'id',
  },
  {
    name: 'title',
    flags: ['searchable'],
  },
  {
    name: 'description',
    flags: ['optional', 'searchable'],
  },
  {
    name: 'comment',
    flags: ['optional', 'searchable'],
  },
  {
    name: 'homepage',
    flags: ['optional'],
  },
];
const columnTable: AppTable = {
  name: 'column-table',
  columns: [
    ...dimRow,
    {
      name: 'unit',
      flags: ['optional', 'searchable-by-field'],
    },
    {
      name: 'media-type',
      flags: ['optional', 'searchable-by-field'],
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
      flags: ['searchable'],
    },
    {
      name: 'unit',
      flags: ['optional', 'searchable-by-field'],
    },
    {
      name: 'media-type',
      flags: ['optional', 'searchable-by-field'],
    },
    {
      name: 'comment',
      flags: ['optional', 'searchable'],
    },
  ],
};

const metadataTable: AppTable = {
  name: 'metadata-table',
  columns: [
    {
      name: 'id-urn',
      flags: ['optional'],
    },
    {
      name: 'account-urn',
      flags: ['optional'],
    },
    {
      name: 'content-url',
      flags: ['optional'],
    },
    {
      name: 'title',
      flags: ['optional'],
    },
    {
      name: 'description',
      flags: ['optional'],
    },
    {
      name: 'license-name',
      flags: ['optional'],
    },
    {
      name: 'license-url',
      flags: ['optional'],
    },
    {
      name: 'author-name',
      flags: ['optional'],
    },
    {
      name: 'author-url',
      flags: ['optional'],
    },
    {
      name: 'attribution-name',
      flags: ['optional'],
    },
    {
      name: 'homepage-url',
      flags: ['optional'],
    },
    {
      name: 'repository-url',
      flags: ['optional'],
    },
    {
      name: 'copyright-year',
      flags: ['optional'],
    },
  ],
};

const preferenceTable: AppTable = {
  name: 'preference-table',
  columns: [
    {
      name: 'theme-urn',
      flags: ['optional'],
    },
  ],
};

export const tables = {
  column: columnTable,
  row: rowTable,
  horizon: horizonTable,
  cell: cellTable,
  metadata: metadataTable,
  preference: preferenceTable,
};

const tableList = [
  columnTable,
  rowTable,
  horizonTable,
  cellTable,
  metadataTable,
  preferenceTable,
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
