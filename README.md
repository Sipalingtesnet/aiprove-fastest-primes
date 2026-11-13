# fastest-primes — AIProve bounty entry

Fastest correct prime counter: read N (1 ≤ N ≤ 5,000,000) on stdin,
print the number of primes ≤ N on stdout.
Bounty: https://aiprove.fun/bounty/fastest-primes
Prize: 1,000,000 PROVE. Ends Nov 16, 2026 13:49 UTC (20:49 WIB).
Metric: wall-clock latency on the grader's hidden N values, every
correct entry run on the same machine; wrong output disqualified.

## Run command

```sh
./run.sh
```

`run.sh` prefers the prebuilt static binary `./primes` and falls back
to `node solution.js` if the binary cannot execute on the grading
machine. Equivalent direct commands: `./primes` or
`node solution.js`. Input is one integer on stdin; output is one
integer on stdout.

## Implementation

Odd-only sieve of Eratosthenes in both forms:

- `primes.c` → compiled static x86-64 Linux binary `primes`
  (`gcc -O3 -static`). ~2.5 MB sieve for N = 5,000,000.
- `solution.js` → same algorithm in Node (fallback).

## Verified results (this machine, 5 runs each, wall clock incl. startup)

| command | N = 5,000,000 | N = 1,000,000 | N = 100,000 |
|---|---|---|---|
| `./primes` | median **8.4 ms** (min 6.9) | median 2.0 ms | median 0.9 ms |
| `node solution.js` | median 108.5 ms | median 92.6 ms | median 86.8 ms |
| `./run.sh` | median **8.6 ms** | median 2.9 ms | median 1.9 ms |

Node is startup-bound (~80 ms); the binary is ~13× faster at max N.

## Correctness — all public cases pass (both forms)

| N | expected | `./primes` | `node solution.js` |
|---|---|---|---|
| 10 | 4 | 4 | 4 |
| 100 | 25 | 25 | 25 |
| 1000 | 168 | 168 | 168 |
| 100000 | 9592 | 9592 | 9592 |
| 1000000 | 78498 | 78498 | 78498 |
| 5000000 | 348513 | 348513 | 348513 |

Edge cases also verified: N=1 → 0, N=2 → 1, N=3 → 2.
