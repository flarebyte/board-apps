import { AppInterfaceView } from '../model/application';
import { uiAttributes } from './cell-app-ui-attribute';

const column: AppInterfaceView = {
  name: 'column',
  attributes: [],
  states: [
    uiAttributes.title,
    uiAttributes.description,
    uiAttributes.comment,
    uiAttributes.homepage,
  ],
};

export const uiView = {
  column,
};
