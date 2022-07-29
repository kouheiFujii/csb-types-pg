let str = "hoge";
const num = 123;
// Type 'number' is not assignable to type 'string'.
// str = num;

// ダウンキャスト
str = num as unknown as string;
