type Tuple = [string, number];

const tuple1: Tuple[0] = "hoge";
const tuple2: Tuple[1] = 123;
// Type 'boolean' is not assignable to type 'Tuple'
const tuple3: Tuple[0] = true;

type Cars = ["honda", "nissan", "suzuki", "matuda"];
// 別の書き方するとこういうこと
// interface Cars {
//   length: 4;
//   0: "honda";
//   1: "nissan";
//   2: "suzuki";
//   3: "matuda";
// }

// type length = 4
type length = Cars["length"];

// type CarsUnizon = "honda" | "nissan" | "suzuki" | "matuda"
type CarsUnizon = Cars[number];

/**
 * 参考
 * https://zenn.dev/luvmini511/articles/d89b3ad241e544
 */
