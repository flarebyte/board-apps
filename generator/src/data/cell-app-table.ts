import { AppColumn, AppTable } from "../model/application";

const dimRow: AppColumn[] = [
    {
        name: "id",
    },
    {
        name: "title",
    },
    {
        name: "description",
    },
    {
        name: "comment",
    },
    {
        name: "homepage",
    },
];
export const columnTable: AppTable = {
    name: "column-table",
    columns: [
        ...dimRow,
        {
            name: "unit",
        },
        {
            name: "media-type",
        },
    ],
};
export const rowTable: AppTable = {
    name: "row-table",
    columns: dimRow,
};
export const horizonTable: AppTable = {
    name: "horizon-table",
    columns: dimRow,
};
export const cellTable: AppTable = {
    name: "cell-table",
    columns: [
        {
            name: "column-id",
        },
        {
            name: "row-id",
        },
        {
            name: "horizon-id",
        },
        {
            name: "text",
        },
        {
            name: "unit",
        },
        {
            name: "media-type",
        },
        {
            name: "comment",
        },
    ],
};
