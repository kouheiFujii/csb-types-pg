const num = 123;

type TypeNum = typeof num;

// Type '455' is not assignable to type '123'.
const hoge: TypeNum = 455;
