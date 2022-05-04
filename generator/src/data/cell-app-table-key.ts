import { AppColumn } from '../model/application';

const id: AppColumn = {
  name: 'id',
};

const title: AppColumn = {
  name: 'title',
  flags: ['searchable'],
};

const description: AppColumn = {
  name: 'description',
  flags: ['optional', 'searchable'],
};

const comment: AppColumn = {
  name: 'comment',
  flags: ['optional', 'searchable'],
};

const homepage: AppColumn = {
  name: 'homepage',
  flags: ['optional'],
};

const unit: AppColumn = {
  name: 'unit',
  flags: ['optional', 'searchable-by-field'],
};

const mediaType: AppColumn = {
  name: 'media-type',
  flags: ['optional', 'searchable-by-field'],
};
const columnId: AppColumn = {
  name: 'column-id',
};
const rowId: AppColumn = {
  name: 'row-id',
};
const horizonId: AppColumn = {
  name: 'horizon-id',
};
const text: AppColumn = {
  name: 'text',
  flags: ['searchable'],
};

const idUrn: AppColumn = {
  name: 'id-urn',
  flags: ['optional'],
};

const accountUrn: AppColumn = {
  name: 'account-urn',
  flags: ['optional'],
};
const contentUrl: AppColumn = {
  name: 'content-url',
  flags: ['optional'],
};
const licenseName: AppColumn = {
  name: 'license-name',
  flags: ['optional'],
};
const licenseUrl: AppColumn = {
  name: 'license-url',
  flags: ['optional'],
};
const authorName: AppColumn = {
  name: 'author-name',
  flags: ['optional'],
};
const authorUrl: AppColumn = {
  name: 'author-url',
  flags: ['optional'],
};
const attributionName: AppColumn = {
  name: 'attribution-name',
  flags: ['optional'],
};
const homepageUrl: AppColumn = {
  name: 'homepage-url',
  flags: ['optional'],
};
const repositoryUrl: AppColumn = {
  name: 'repository-url',
  flags: ['optional'],
};
const copyrightYear: AppColumn = {
  name: 'copyright-year',
  flags: ['optional'],
};

const themeUrn: AppColumn = {
  name: 'theme-urn',
  flags: ['optional'],
};
const topicUrnList: AppColumn = {
  name: 'topic-urn-list',
};

const telemetryMode: AppColumn = {
  name: 'telemetry-mode',
};
export const dimRow: AppColumn[] = [id, title, description, comment, homepage];

export const columns = {
  id,
  title,
  description,
  comment,
  homepage,
  unit,
  mediaType,
  columnId,
  rowId,
  horizonId,
  text,
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
  topicUrnList,
  telemetryMode,
};
