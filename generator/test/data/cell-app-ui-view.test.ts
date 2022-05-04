import { tables } from '../../src/data/cell-app-table';
import { uiViews } from '../../src/data/cell-app-ui-view';
import { keyContains, undash } from './testing-utility';

describe('cell-app-ui-view', () => {
  const keyViews = Object.entries(uiViews);
  const tableNames = Object.keys(tables);
  it('should have consistent keys and names', () => {
    for (const [key, message] of keyViews) {
      expect(undash(message.name).toLocaleLowerCase()).toContain(
        key.toLocaleLowerCase()
      );
    }
  });
  it.each(tableNames)(
    'should use consistent naming convention for name %s',
    (name) => {
      const relevantViews = keyViews.filter(keyContains(name));
      expect(relevantViews.length).toBeGreaterThanOrEqual(1);
      for (const [_, message] of relevantViews) {
        expect(message.name).toContain(name);
        expect(message.name).toContain('-view');
      }
    }
  );
});
