import { messages } from '../../src/data/cell-app-message';

describe('cell-app-message', () => {
  const keyMessages = Object.entries(messages);
  it.each(['column', 'row', 'horizon', 'cell'])(
    'should use consistent naming convention for name %s',
    (name) => {
      const relevantMessages = keyMessages.filter(
        (kv) => kv[0].toLowerCase().includes(name)
      );
      expect(relevantMessages.length).toBeGreaterThanOrEqual(2);
      for (const [_, message] of relevantMessages) {
        expect(message.name).toContain(name);
        expect(message.name).toContain('-message');
      }
    }
  );
  it.each(['add', 'update', 'delete', 'get'])(
    'should use consistent naming convention for operation %s',
    (name) => {
      const relevantMessages = keyMessages.filter(
        (kv) => kv[0].toLowerCase().includes(name)
      );
      expect(relevantMessages.length).toBeGreaterThanOrEqual(2);
      for (const [_, message] of relevantMessages) {
        expect(message.name).toContain(name);
      }
    }
  );
});
