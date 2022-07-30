type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "user1",
  age: 22
};

// Kは引数に当てられたTオブジェクトのkeyプロパティでなければならないということ
function pick<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// ここでは第一引数にuserを入れているので、"name" | "age" のいづれかしか指定できない
const userName = pick(user, "name");
// user1Nameはstring型
console.log(userName);
const userAge = pick(user, "age");
// user1Nameはnumber型
console.log(userAge);

// Argument of type '"hoge"' is not assignable to parameter of type 'keyof User'.
pick(user, "hoge");
