import { AppInterfaceAttribute } from '../model/application';
import { BubblegumAttributeKey } from '../model/bubblegum-vocabulary';

const attr = (
  messageKey: string,
  interfaceKey: BubblegumAttributeKey
): AppInterfaceAttribute => ({ interfaceKey, messageKey });

const title = attr('title', 'ui:content');
const description = attr('description', 'ui:content');
const comment = attr('comment', 'ui:content');
const homepage = attr('homepage', 'ui:content');
const unit = attr('unit', 'ui:content');
const mediaType = attr('media-type', 'ui:content');
const text = attr('text', 'ui:content');

export const uiAttributes = {
  title,
  description,
  comment,
  homepage,
  unit,
  mediaType,
  text,
};
