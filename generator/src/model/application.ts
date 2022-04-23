export interface Ownership {
  copyright: string;
  companyName: string;
  companyHomepage: string;
}

export interface AppColumn {
  name: string;
}

export interface AppTable {
  name: string;
  columns: AppColumn[];
}
export interface AppDocument {
  name: string;
  tables: AppTable[];
}

export interface AppKeyValidation {
  name: string;
}
export interface AppKey {
  name: string;
  multiple: boolean;
  validation: AppKeyValidation;
}

export interface AppMessage {
  name: string;
  routing: AppKey[];
  headers: AppKey[];
  params: AppKey[];
}

type AppAction =
  | {
      name: string;
      kind: "custom-action";
      inboundMessage: AppMessage;
    }
  | {
      name: string;
      inboundMessage: AppMessage;
      table: AppTable;
      kind: "get" | "update" | "append" | "delete" | "search";
    };

export interface AppDocManager {
  name: string;
  filenameExtension: string;
  zipFilenameExtension: string;
  document: AppDocument;
  actions: AppAction[];
}

export interface WebApplication {
  name: string;
  domain: string;
  ownership: Ownership;
  docManagers: AppDocManager[];
}
