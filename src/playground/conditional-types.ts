// 構文 Conditional<T, U, X, Y> = T extends U ? X : Y;
type Conditional<T, U> = T extends U ? U : unknown;

type Hoge = {
  hoge: string;
  fuga: number;
};

type fuga = { fuga: number };
// プロパティが同値のものがあれば返す。それ以外はunknownを返す
type CHoge = Conditional<Hoge, fuga>;
// type CHoge = {
//   fuga: number;
// }

/**
 * Conditional Types の遅延評価
 * 参考：https://qiita.com/Quramy/items/b45711789605ef9f96de
 */
// $Diff をConditional Typesで表現する
type Props = { name: string; age: number };
type DefaultProps = { age: number };
// 第一引数のtype Props から type DefaultProps を除外して定義
type RequiredProps = $Diff<Props, DefaultProps>;
// type RequiredProps = {
//   name: string;
// }

declare function setProps<T extends RequiredProps>(props: T): void;

setProps({ name: "foo" });
setProps({ name: "foo", age: 42 }); // you can pass extra props too
setProps({ age: 42 }); // error, name is requred

/**
 * 参考文献そのまま引用
 */
// Tの中にUがあればneverを返す、そうでなければTを返す
// Tの中からUを除く型を設定している
type Diff<T, U> = T extends U ? never : T;

// type RequiredKeys = Diff<"age" | "name", "age">; // "name"が返される
// ここでのDiff<keyof T, keyof U>の中身は↑
type $Diff<T, U> = Pick<T, Diff<keyof T, keyof U>>;

/**
 * infer
 * 参考：
 * https://www.typescriptlang.org/ja/play#example/conditional-types
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 */

function Hoge(arg: string): number {
  return 1;
}
function Foo(arg: number): boolean {
  return true;
}
function Piyo(arg: boolean): string {
  return "hoge";
}
function Bar(arg: any): void;

// 関数の返り値、プリミティブな型を返す
type GetReturnValue<T> = T extends (...args: any[]) => infer R ? R : T;

// let foo: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
let foo = typeof Hoge;

// type Return1 = number
type Return1 = GetReturnValue<typeof Hoge>;

// type Return2 = boolean
type Return2 = GetReturnValue<typeof Foo>;

// type Return3 = string
type Return3 = GetReturnValue<typeof Piyo>;

// type Return4 = void
type Return4 = GetReturnValue<typeof Bar>;

// type Return5 = string
type Return5 = GetReturnValue<string>;
