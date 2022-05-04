import { filterScratchBook, withExactly } from 'scratchbook';
import { tables, tableScratchBook } from '../../src/data/cell-app-table';
import { undash } from './testing-utility';

const searchDescriptionByName = (name: string) =>
  filterScratchBook(withExactly(`table/${name}/description`))(tableScratchBook)
    .notes;

describe('cell-app-tables', () => {
  const keyTables = Object.entries(tables);
  it('should have consistent keys and names', () => {
    for (const [key, table] of keyTables) {
      expect(undash(table.name).toLocaleLowerCase()).toContain(
        key.toLocaleLowerCase()
      );
    }
  });
  it.each(keyTables)('should have description for %s', (_, table) => {
    expect(searchDescriptionByName(table.name)).toHaveLength(1);
  });
  it('produce correct tables', () => {
    const summary = Object.values(tables).map((table) =>
      [table.name, '->', ...table.columns.map((col) => col.name).sort()].join(
        ' '
      )
    );
    expect(summary).toMatchInlineSnapshot(`
      Array [
        "column-table -> comment description homepage id media-type title unit",
        "row-table -> comment description homepage id title",
        "horizon-table -> comment description homepage id title",
        "cell-table -> column-id comment horizon-id media-type row-id text unit",
        "metadata-table -> account-urn attribution-name author-name author-url content-url copyright-year description homepage-url id-urn license-name license-url repository-url title",
        "preference-table -> telemetry-mode theme-urn",
        "quest-table -> account-urn id-urn title topic-urn-list",
        "topic-table -> id-urn title",
      ]
    `);
  });
});
