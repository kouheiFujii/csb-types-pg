type ErrStrVarieties = "Not Found" | "Bad Request" | "Internal Server Error";

type ErrStr = `Error: ${ErrStrVarieties}`;

const err1: ErrStr = "Error: Bad Request";
const err2: ErrStr = "Error: Not Found";
const err3: ErrStr = "Error: Not Found";

// エラー
// Type '"Error: Conflict"' is not assignable to type '"Error: Not Found" | "Error: Bad Request" | "Error: Internal Server Error"'.
const err4: ErrStr = "Error: Conflict";
