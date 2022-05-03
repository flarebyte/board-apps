import { AppInterfaceAttribute } from '../model/application';

const title: AppInterfaceAttribute = { messageKey: 'title', kind: 'text-area' };
const description: AppInterfaceAttribute = {
  messageKey: 'description',
  kind: 'text-area',
};
const comment: AppInterfaceAttribute = {
  messageKey: 'comment',
  kind: 'text-area',
};
const homepage: AppInterfaceAttribute = {
  messageKey: 'homepage',
  kind: 'url-input',
};
const unit: AppInterfaceAttribute = { messageKey: 'unit', kind: 'text-input' };
const mediaType: AppInterfaceAttribute = {
  messageKey: 'mediaType',
  kind: 'choice',
  choices: ['text', 'markdown'],
};
const text: AppInterfaceAttribute = { messageKey: 'text', kind: 'text-area' };

export const uiAttributes = {
  title,
  description,
  comment,
  homepage,
  unit,
  mediaType,
  text,
};
