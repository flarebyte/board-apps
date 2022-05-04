import { AppKey } from '../model/application';
import { validations } from './cell-app-validation';

const title: AppKey = { name: 'title', validation: validations.shortText };

const description: AppKey = {
  name: 'description',
  validation: validations.freeText,
};
const comment: AppKey = { name: 'comment', validation: validations.freeText };
const homepage: AppKey = { name: 'homepage', validation: validations.url };

const unit: AppKey = {
  name: 'unit',
  validation: validations.shortText,
  flags: ['optional'],
};

const mediaType: AppKey = {
  name: 'media-type',
  validation: validations.shortText,
  flags: ['optional'],
};

const columnId: AppKey = {
  name: 'column-id',
  validation: validations.identifier,
};
const rowId: AppKey = { name: 'row-id', validation: validations.identifier };

const horizonId: AppKey = {
  name: 'horizon-id',
  validation: validations.identifier,
};
const text: AppKey = {
  name: 'text',
  validation: validations.freeText,
  flags: ['optional'],
};

const idUrn: AppKey = {
  name: 'id-urn',
  flags: ['optional'],
  validation: validations.shortText,
};

const accountUrn: AppKey = {
  name: 'account-urn',
  flags: ['optional'],
  validation: validations.shortText,
};
const contentUrl: AppKey = {
  name: 'content-url',
  flags: ['optional'],
  validation: validations.shortText,
};
const licenseName: AppKey = {
  name: 'license-name',
  flags: ['optional'],
  validation: validations.shortText,
};
const licenseUrl: AppKey = {
  name: 'license-url',
  flags: ['optional'],
  validation: validations.shortText,
};
const authorName: AppKey = {
  name: 'author-name',
  flags: ['optional'],
  validation: validations.shortText,
};
const authorUrl: AppKey = {
  name: 'author-url',
  flags: ['optional'],
  validation: validations.shortText,
};
const attributionName: AppKey = {
  name: 'attribution-name',
  flags: ['optional'],
  validation: validations.shortText,
};
const homepageUrl: AppKey = {
  name: 'homepage-url',
  flags: ['optional'],
  validation: validations.shortText,
};
const repositoryUrl: AppKey = {
  name: 'repository-url',
  flags: ['optional'],
  validation: validations.shortText,
};
const copyrightYear: AppKey = {
  name: 'copyright-year',
  flags: ['optional'],
  validation: validations.shortText,
};
const themeUrn: AppKey = {
  name: 'theme-urn',
  flags: ['optional'],
  validation: validations.shortText,
};
export const messageKeys = {
  title,
  description,
  comment,
  homepage,
  unit,
  mediaType,
  text,
  columnId,
  rowId,
  horizonId,
  idUrn,
  accountUrn,
  contentUrl,
  licenseName,
  licenseUrl,
  authorName,
  authorUrl,
  attributionName,
  homepageUrl,
  repositoryUrl,
  copyrightYear,
  themeUrn,
};
