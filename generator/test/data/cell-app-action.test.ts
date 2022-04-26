import { actions } from '../../src/data/cell-app-action';

describe('cell-app-action', () => {
  const keyActions = Object.entries(actions);
  it.each(['column', 'row', 'horizon', 'cell'])(
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
        expect(action.name).toContain('-action');
        if (action.kind !== 'custom-action') {
          expect(action.table.name).toContain(name);
        }
      }
    }
  );
  it.each(['add', 'update', 'delete', 'get'])(
    'should use consistent naming convention for operation %s',
    (name) => {
      const relevantActions = keyActions.filter((kv) =>
        kv[0].toLowerCase().includes(name)
      );
      expect(relevantActions.length).toBeGreaterThanOrEqual(2);
      for (const [_, action] of relevantActions) {
        expect(action.name).toContain(name);
        expect(action.inboundMessage.name).toContain(name);
        expect(action.kind).toStrictEqual(name);
      }
    }
  );
});
