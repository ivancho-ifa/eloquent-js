// NOTE: decalration without definition is undefined
// NOTE: const can not be declared without definition
//       const a; // error

// NOTE: Number, String, Boolean:
//       constructors for a type
// NOTE: Number: null -> 0
//               '' -> 0
//               undefined -> NaN

let test_convertions;
console.log(`${test_convertions} type:${typeof test_convertions}`);

test_convertions = Number('');
console.log(`${test_convertions} type:${typeof test_convertions}`);

test_convertions = String(null);
console.log(`${test_convertions} type:${typeof test_convertions}`);

test_convertions = Boolean(undefined);
console.log(`${test_convertions} type:${typeof test_convertions}`);

// NOTE: use isNaN() to test for NaN

// NOTE: break; and continue; in loops

let a = 5, b = 7;
console.log(`${a} ${b}`);

// NOTE: swap
[a, b] = [b, a];

console.log(`${a} ${b}`);

// NOTE: if left side of is '', null, undefined or 0 the || returns right side expression