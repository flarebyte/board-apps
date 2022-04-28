import { actions } from '../../src/data/cell-app-action';

describe('cell-app-action', () => {
  const keyActions = Object.entries(actions);
  it.each(['column', 'row', 'horizon', 'cell', 'metadata', 'preference'])(
    'should use consistent naming convention for name %s',
    (name) => {
      const relevantActions = keyActions.filter(
        (kv) =>
          kv[0].toLowerCase().includes(name) && kv[1].kind !== 'custom-action'
      );
      expect(relevantActions.length).toBeGreaterThanOrEqual(2);
      for (const [_, action] of relevantActions) {
        expect(action.name).toContain(name);
        expect(action.inboundMessage.name).toContain(name);
        expect(action.inboundMessage.action).toStrictEqual(action.name);
        expect(action.name).toContain('-action');
        if (action.kind !== 'custom-action') {
          expect(action.table.name).toContain(name);
        }
      }
    }
  );
  it.each(['add', 'update', 'delete', 'get', 'search'])(
    'should use consistent naming convention for operation %s',
    (name) => {
      const relevantActions = keyActions.filter((kv) =>
        kv[0].toLowerCase().includes(name)
      );
      expect(relevantActions.length).toBeGreaterThanOrEqual(2);
      for (const [_, action] of relevantActions) {
        expect(action.name).toContain(name);
        expect(action.inboundMessage.name).toContain(name);
        expect(action.inboundMessage.action).toStrictEqual(action.name);
        expect(action.kind).toStrictEqual(name);
      }
    }
  );
  it('should use consistent naming convention for custom actions', () => {
    const relevantActions = keyActions.filter(
      (kv) => kv[1].kind === 'custom-action'
    );
    for (const [_, action] of relevantActions) {
      expect(action.inboundMessage.action).toStrictEqual(action.name);
    }
  });
});
