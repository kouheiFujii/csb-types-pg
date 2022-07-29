/** 固定長配列 */
type FixedLengthArrNum = readonly number[];
const  arrNum : FixedLengthArrNum = [1,2,3];

// Index signature in type 'FixedLengthArrNum' only permits reading.
// 書き換え不可
arrNum[0] = 2;

// Property 'push' does not exist on type 'FixedLengthArrNum'.
// push で追加も不可
arrNum.push(4)

/** readonlyタプル */
type ReadOnlyTuple = readonly [number, boolean];
const tuple: ReadOnlyTuple = [222, true];
// エラー: Cannot assign to '0' because it is a read-only property.
tuple[0] = 'bar';
