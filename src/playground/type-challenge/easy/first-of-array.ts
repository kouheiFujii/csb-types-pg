// 配列の最初の要素の型を取得する
type First<T extends any[]> = T extends [infer First, ...any] ? First : never;
/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 */
type arr1 = [1, 2, 3];

// type head1 = 1
type head1 = First<arr1>;

// 配列の最後の要素の型を取得する
type Last<T extends any[]> = T extends [...any, infer Last] ? Last : never;

type arr2 = [1, 2, 3];

// type head2 = 3
type head2 = Last<arr2>;

// 配列の最後の要素の型を取得する
type Second<T extends any[]> = T["length"] extends 1 ? never : T[1];

type arr3 = [1, 2, 3];

// type head3 = 2
type head3 = Second<arr3>;
