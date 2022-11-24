import { mockData, DataMock } from '../mocks/sort.mock';
import { createSort } from '../src';

describe('Find values describe test', () => {
    test('Create sort by name order by ASC', () => {
      expect(
        createSort({
          data: mockData,
          orderBy: 'ASC',
          sortBy: 'name',
        }),
      ).toStrictEqual<DataMock[]>([
          {
            name:"sdfs",
            year:23
          }
      ]);
    });
  });