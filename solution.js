const fs = require('fs');
const n = parseInt(fs.readFileSync(0, 'utf-8').trim(), 10);
if (n < 2) { console.log(0); process.exit(0); }
const m = (n + 1) >> 1;            // odds only: odd x maps to x>>1
const s = new Uint8Array(m);       // 0 = prime candidate
const sq = Math.floor(Math.sqrt(n));
for (let i = 3; i <= sq; i += 2) {
  if (!s[i >> 1]) for (let j = i * i; j <= n; j += 2 * i) s[j >> 1] = 1;
}
let c = 1;                          // prime 2
for (let i = 1; i < m; i++) if (!s[i]) c++;
console.log(c);
