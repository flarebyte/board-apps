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
              "name": "text",
            },
            Object {
              "name": "unit",
            },
            Object {
              "name": "media-type",
            },
            Object {
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
              "name": "title",
            },
            Object {
              "name": "description",
            },
            Object {
              "name": "comment",
            },
            Object {
              "name": "homepage",
            },
            Object {
              "name": "unit",
            },
            Object {
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
              "name": "title",
            },
            Object {
              "name": "description",
            },
            Object {
              "name": "comment",
            },
            Object {
              "name": "homepage",
            },
          ],
          "name": "horizon-table",
        },
        "row": Object {
          "columns": Array [
            Object {
              "name": "id",
            },
            Object {
              "name": "title",
            },
            Object {
              "name": "description",
            },
            Object {
              "name": "comment",
            },
            Object {
              "name": "homepage",
            },
          ],
          "name": "row-table",
        },
      }
    `);
  });
});
