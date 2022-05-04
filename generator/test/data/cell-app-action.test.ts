import { actions } from '../../src/data/cell-app-action';
import { tables } from '../../src/data/cell-app-table';
import { isTableRelatedAction } from '../../src/model/application';
import { keyContains, undash } from './testing-utility';

describe('cell-app-action', () => {
  const keyActions = Object.entries(actions);
  const tableNames = Object.keys(tables)
  it('should have consistent keys and names', () => {
    for (const [key, action] of keyActions) {
      expect(undash(action.name).toLocaleLowerCase()).toContain(
        key.toLocaleLowerCase()
      );
    }
  });
  it.each(tableNames)(
    'should use consistent naming convention for name %s',
    (name) => {
      const relevantActions = keyActions.filter(
        (kv) => keyContains(name)(kv) && kv[1].kind !== 'custom-action'
      );
      expect(relevantActions.length).toBeGreaterThanOrEqual(1);
      for (const [_, action] of relevantActions) {
        expect(action.name).toContain(name);
        expect(action.inboundMessage.name).toContain(name);
        expect(action.inboundMessage.action).toStrictEqual(action.name);
        expect(action.name).toContain('-action');
        if (isTableRelatedAction(action.kind)) {
          expect(action.table.name).toContain(name);
        }
      }
    }
  );
  it.each(['add', 'update', 'delete', 'get', 'search'])(
    'should use consistent naming convention for operation %s',
    (name) => {
      const relevantActions = keyActions.filter(keyContains(name));
      expect(relevantActions.length).toBeGreaterThanOrEqual(1);
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
