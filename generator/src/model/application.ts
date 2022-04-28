export interface Ownership {
  copyright: string;
  companyName: string;
  companyHomepage: string;
}

export type AppColumnFlag =
  | 'optional'
  | 'remote-source'
  | 'calculated'
  | 'searchable'
  | 'searchable-by-field';
export interface AppColumn {
  name: string;
  flags?: AppColumnFlag[];
}

export type AppTableFlag = 'one-row';
export interface AppTable {
  name: string;
  flags?: AppTableFlag;
  columns: AppColumn[];
}
export interface AppDocument {
  name: string;
  tables: AppTable[];
}

export interface AppKeyValidation {
  name: string;
}

export type AppKeyFlag = 'multiple' | 'optional';
export interface AppKey {
  name: string;
  flags?: AppKeyFlag[];
  validation: AppKeyValidation;
}

export interface AppMessage {
  name: string;
  action: string;
  params: AppKey[];
}

export type AppAction =
  | {
      name: string;
      kind: 'custom-action';
      inboundMessage: AppMessage;
    }
  | {
      name: string;
      inboundMessage: AppMessage;
      table: AppTable;
      kind: 'get' | 'update' | 'add' | 'delete' | 'search';
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
