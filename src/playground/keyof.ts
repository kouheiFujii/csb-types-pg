interface TestOb {
  hoge: string;
  piyo: number;
}

// プロパティのキーを型に指定する
// この場合、 "hoge" | "piyo" のユニゾン型になる
type Testtype = keyof TestOb;

const testob2: Testtype = "hoge";
console.log(testob2);

const testob3: Testtype = "piyo";
console.log(testob3);
// Type '"bar"' is not assignable to type 'keyof TestOb'.
const testob4: Testtype = "bar";
console.log(testob4);
