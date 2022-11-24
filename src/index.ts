import { CreateSort, FindById } from './interfaces/parameters.interface';

/**
 * Create sort
 * -
 * - Dynamically sort your object vectors
 * @param data T[ ]
 * @param orderBy string
 * @param sortBy ASC | DESC
 */
export const createSort = <T>({
  data,
  orderBy,
  sortBy,
}: CreateSort<T>): T[] => {
  return data.sort(function (a: T, b: T) {
    if (a[sortBy] < b[sortBy]) return orderBy === 'ASC' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return orderBy === 'ASC' ? 1 : -1;
    return 0;
  });
};


/**
 * Find by hash value
 * -
 * - Find to objects or arrays
 * @param data T[ ]
 * @param hashKey string keyof T
 * @param hashValue string | number | any
 */
export const findByHashValue = <T>({
  data,
  hashKey,
  hashValue,
}: FindById<T>): T | T[] => {
  const arr = data.filter((value: T) => value[hashKey] === hashValue);
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr;
  }
};
