import { filterScratchBook, withExactly } from 'scratchbook';
import {
  validations,
  validationScratchBook,
} from '../../src/data/cell-app-validation';
import { undash } from './testing-utility';

const searchDescriptionByName = (name: string) =>
  filterScratchBook(withExactly(`key-validation/${name}/description`))(
    validationScratchBook
  ).notes;

describe('cell-app-validation', () => {
  const keyValidations = Object.entries(validations);
  it('should have consistent keys and names', () => {
    for (const [key, validation] of keyValidations) {
      expect(undash(validation.name).toLocaleLowerCase()).toContain(
        key.toLocaleLowerCase()
      );
    }
  });
  it.each(keyValidations)('should have description for %s', (_, validation) => {
    expect(searchDescriptionByName(validation.name)).toHaveLength(1);
  });
});
