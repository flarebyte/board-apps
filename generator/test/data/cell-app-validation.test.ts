import { validations } from '../../src/data/cell-app-validation';
import { undash } from './testing-utility';

describe('cell-app-validation', () => {
  const keyValidations = Object.entries(validations);
  it('should have consistent keys and names', () => {
    for (const [key, validation] of keyValidations) {
      expect(undash(validation.name).toLocaleLowerCase()).toContain(
        key.toLocaleLowerCase()
      );
    }
  });
});
