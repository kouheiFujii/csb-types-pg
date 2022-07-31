/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
 */

// CがtrueならT、そうでないならFを返す
type If<C, T, F> = C extends true ? T : F;

// type a = "a"
type a = If<true, "a", "b">;
// type b = "b"
type b = If<false, "a", "b">;
