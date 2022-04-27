import { AppKeyValidation } from '../model/application';

const freeText: AppKeyValidation = {
  name: 'free-text-validation',
};
const shortText: AppKeyValidation = {
  name: 'short-text-validation',
};
const identifier: AppKeyValidation = {
  name: 'idt-validation',
};
const url: AppKeyValidation = {
  name: 'url-validation',
};
const action: AppKeyValidation = {
  name: 'action-validation',
};
const filename: AppKeyValidation = {
  name: 'filename-validation',
};
const importJsonMode: AppKeyValidation = {
  name: 'import-json-mode-validation',
};

export const validations = {
  freeText,
  shortText,
  identifier,
  url,
  action,
  filename,
  importJsonMode
};
