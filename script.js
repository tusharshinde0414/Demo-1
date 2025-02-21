const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// for (let i = 1; i <= count; i = i++) {
//   rows.push(padRow(i, count));
// }
// let done = 0;
// while (rows.length < count) { // This code should not be with done variable
// while (done !== count) {
// done++;
// rows.push(padRow(done, count));
// rows.push(padRow(rows.length + 1, count)); // This code should not be with done variable
// }
// Downside peramid starts with this for loop.
// for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
