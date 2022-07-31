// 関数の引数のパラメータにアクセスして型を抽出する
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : any;

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

// type Tfoo = [arg1: string, arg2: number]
type TFoo = MyParameters<typeof foo>;
// type TBar = [arg1: boolean, arg2: {
//   a: "A";
// }]
type TBar = MyParameters<typeof bar>;

// type TBaz = []
type TBaz = MyParameters<typeof baz>;
