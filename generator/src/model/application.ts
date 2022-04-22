export interface Ownership {
  license: string;
  licenseUrl: string;
  companyName: string;
  companyHomepage: string;
  domain: string;
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

export interface AppAction {
  name: string;
  inboundMessage: AppMessage;
}

type AppTableActionKind = "get" | "update" | "append" | "delete" | "search";

export interface AppTableAction {
  name: string;
  inboundMessage: AppMessage;
  table: AppTable;
  kind: AppTableActionKind;
}

export interface AppDocManager {
  name: string;
  document: AppDocument;
  actions: AppAction[];
  tableActions: AppTableAction[];
}

export interface WebApplication {
  name: string;
  ownership: Ownership;
  docManagers: AppDocManager[];
}
