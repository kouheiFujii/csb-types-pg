// どの型でもあり、どの型でもない
// それぞれの型の部分型みたいな立ち位置

let u: unknown = "hoge";

// 何でも入れられる
u = 123;
u = true;

// プロパティのアクセスとかはできないようになっている
// Property 'prop' does not exist on type 'unknown'.
console.log(u.prop);

// any型は何にでも対応してしまう
let a: any;
// プロパティもないのにアクセスできてしまう
console.log(a.huga);
