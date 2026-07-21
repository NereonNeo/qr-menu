/**
 * @schema 2.11
 * @input color: color = #131313
 * @input modules: number = 29
 * @input quiet: number = 0
 * @input clearCenter: boolean = true
 */
const N = Math.max(21, Math.floor(pencil.input.modules));
const cell = Math.min(pencil.width, pencil.height) / N;
const color = pencil.input.color;

const grid = [];
for (let r = 0; r < N; r++) grid.push(new Array(N).fill(false));

function finder(r0, c0) {
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const edge = r === 0 || r === 6 || c === 0 || c === 6;
      const core = r >= 2 && r <= 4 && c >= 2 && c <= 4;
      grid[r0 + r][c0 + c] = edge || core;
    }
  }
}
function reserved(r, c) {
  const inTL = r < 8 && c < 8;
  const inTR = r < 8 && c >= N - 8;
  const inBL = r >= N - 8 && c < 8;
  return inTL || inTR || inBL;
}

finder(0, 0);
finder(0, N - 7);
finder(N - 7, 0);

// timing patterns
for (let i = 8; i < N - 8; i++) {
  grid[6][i] = i % 2 === 0;
  grid[i][6] = i % 2 === 0;
}

// alignment pattern bottom-right
const a0 = N - 9;
for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 5; c++) {
    const edge = r === 0 || r === 4 || c === 0 || c === 4;
    const core = r === 2 && c === 2;
    grid[a0 + r][a0 + c] = edge || core;
  }
}

const mid = N / 2;
const clearR = pencil.input.clearCenter ? N * 0.16 : 0;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (reserved(r, c)) continue;
    if (r === 6 || c === 6) continue;
    if (r >= a0 - 1 && r <= a0 + 5 && c >= a0 - 1 && c <= a0 + 5) continue;
    if (clearR > 0 && Math.abs(r - mid) < clearR && Math.abs(c - mid) < clearR) continue;
    if (Math.random() > 0.52) grid[r][c] = true;
  }
}

const nodes = [];
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (!grid[r][c]) continue;
    nodes.push({
      type: "rectangle",
      name: "m",
      x: c * cell,
      y: r * cell,
      width: cell + 0.5,
      height: cell + 0.5,
      fill: color,
      cornerRadius: cell * 0.18,
    });
  }
}
