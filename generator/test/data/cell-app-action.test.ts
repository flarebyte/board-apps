import { actions } from '../../src/data/cell-app-action';

describe('cell-app-action', () => {
  const keyActions = Object.entries(actions);
  it.each(['column', 'row', 'horizon', 'cell'])(
    'should use consistent naming convention for name %s',
    (name) => {
      const relevantMessages = keyActions.filter(
        (kv) => kv[0].toLowerCase().includes(name)
      );
      expect(relevantMessages.length).toBeGreaterThanOrEqual(2);
      for (const [_, message] of relevantMessages) {
        expect(message.name).toContain(name);
        expect(message.name).toContain('-action');
      }
    }
  );
  it.each(['add', 'update', 'delete'])(
    'should use consistent naming convention for operation %s',
    (name) => {
      const relevantMessages = keyActions.filter(
        (kv) => kv[0].toLowerCase().includes(name)
      );
      expect(relevantMessages.length).toBeGreaterThanOrEqual(2);
      for (const [_, message] of relevantMessages) {
        expect(message.name).toContain(name);
      }
    }
  );
});
