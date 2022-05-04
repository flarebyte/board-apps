import { messages } from '../../src/data/cell-app-message';
import { tables } from '../../src/data/cell-app-table';
import { keyContains, undash } from './testing-utility';

describe('cell-app-message', () => {
  const keyMessages = Object.entries(messages);
  const tableNames = Object.keys(tables)
  it('should have consistent keys and names', () => {
    for (const [key, message] of keyMessages) {
      expect(undash(message.name).toLocaleLowerCase()).toContain(
        key.toLocaleLowerCase()
      );
    }
  });
  it.each(tableNames)(
    'should use consistent naming convention for name %s',
    (name) => {
      const relevantMessages = keyMessages.filter(keyContains(name));
      expect(relevantMessages.length).toBeGreaterThanOrEqual(1);
      for (const [_, message] of relevantMessages) {
        expect(message.name).toContain(name);
        expect(message.name).toContain('-message');
        expect(message.action).toContain('-action');
      }
    }
  );
  it.each(['add', 'update', 'delete', 'get', 'search'])(
    'should use consistent naming convention for operation %s',
    (name) => {
      const relevantMessages = keyMessages.filter(keyContains(name));
      expect(relevantMessages.length).toBeGreaterThanOrEqual(1);
      for (const [_, message] of relevantMessages) {
        expect(message.name).toContain(name);
      }
    }
  );
});
