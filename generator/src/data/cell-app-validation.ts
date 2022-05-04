import { createScratchNote, ScratchBook } from 'scratchbook';
import { AppKeyValidation } from '../model/application';

const freeText: AppKeyValidation = {
  name: 'free-text-validation',
};
const shortText: AppKeyValidation = {
  name: 'short-text-validation',
};
const identifier: AppKeyValidation = {
  name: 'identifier-validation',
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

const telemetryMode: AppKeyValidation = {
  name: 'telemetry-mode',
};

export const validations = {
  freeText,
  shortText,
  identifier,
  url,
  action,
  filename,
  importJsonMode,
  telemetryMode,
};

const createDescriptionNote = (
  appKeyValidation: AppKeyValidation,
  text: string
) =>
  createScratchNote(
    `key-validation/${appKeyValidation.name}/description`,
    text
  );
export const validationScratchBook: ScratchBook = {
  notes: [
    createDescriptionNote(validations.action, 'action'),
    createDescriptionNote(validations.filename, 'filename'),
    createDescriptionNote(validations.freeText, 'action'),
    createDescriptionNote(validations.identifier, 'action'),
    createDescriptionNote(
      validations.importJsonMode,
      'everything, column, row, horizon'
    ),
    createDescriptionNote(validations.shortText, 'action'),
    createDescriptionNote(validations.url, 'action'),
    createDescriptionNote(validations.telemetryMode, 'telemetry'),
  ],
};
