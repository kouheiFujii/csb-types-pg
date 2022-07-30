type Book = {
  title: string;
  fee: number;
  author: string;
};

// 全部に?修飾子をかける
type TPartial<T> = { [P in keyof T]?: T[P] };

type OBook = TPartial<Book>;
// type OBook = {
//   title?: string;
//   fee?: number;
//   author?: string;
// }

// 全部にreadonlyつける
type TReadonly<T> = { readonly [P in keyof T]: T[P] };

type RBook = TReadonly<Book>;
// type RBook = {
//   readonly title: string;
//   readonly fee: number;
//   readonly author: string;
// }

// 全部の?修飾子を外す
type TRequired<T> = { [P in keyof T]-?: T[P] };

type RdBook = TRequired<OBook>;
// type RdBook = {
//   title: string;
//   fee: number;
//   author: string;
// }

// ↑全部標準ライブラリに入ってる

// プロパティをそれぞれ倍にして返却する
function Duble<T>(obj: T): { [P in keyof T]: number } {
  const res = {} as { [P in keyof T]: number };
  for (const key in obj) {
    res[key] = Number(obj[key]) * 2;
  }
  return res;
}

const prop = {
  hoge: 2,
  fuga: 4,
  piyo: 8
};

const result = Duble(prop);
