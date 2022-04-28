import { tables } from '../../src/data/cell-app-table';

describe('cell-app-tables', () => {
  it('produce correct tables', () => {
    expect(tables).toMatchInlineSnapshot(`
      Object {
        "cell": Object {
          "columns": Array [
            Object {
              "name": "column-id",
            },
            Object {
              "name": "row-id",
            },
            Object {
              "name": "horizon-id",
            },
            Object {
              "flags": Array [
                "searchable",
              ],
              "name": "text",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable-by-field",
              ],
              "name": "unit",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable-by-field",
              ],
              "name": "media-type",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "comment",
            },
          ],
          "name": "cell-table",
        },
        "column": Object {
          "columns": Array [
            Object {
              "name": "id",
            },
            Object {
              "flags": Array [
                "searchable",
              ],
              "name": "title",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "description",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "comment",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "homepage",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable-by-field",
              ],
              "name": "unit",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable-by-field",
              ],
              "name": "media-type",
            },
          ],
          "name": "column-table",
        },
        "horizon": Object {
          "columns": Array [
            Object {
              "name": "id",
            },
            Object {
              "flags": Array [
                "searchable",
              ],
              "name": "title",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "description",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "comment",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "homepage",
            },
          ],
          "name": "horizon-table",
        },
        "metadata": Object {
          "columns": Array [
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "id-urn",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "account-urn",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "content-url",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "title",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "description",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "license-name",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "license-url",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "author-name",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "author-url",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "attribution-name",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "homepage-url",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "repository-url",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "copyright-year",
            },
          ],
          "name": "metadata-table",
        },
        "preference": Object {
          "columns": Array [
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "theme-urn",
            },
          ],
          "name": "preference-table",
        },
        "row": Object {
          "columns": Array [
            Object {
              "name": "id",
            },
            Object {
              "flags": Array [
                "searchable",
              ],
              "name": "title",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "description",
            },
            Object {
              "flags": Array [
                "optional",
                "searchable",
              ],
              "name": "comment",
            },
            Object {
              "flags": Array [
                "optional",
              ],
              "name": "homepage",
            },
          ],
          "name": "row-table",
        },
      }
    `);
  });
});
