#!/bin/sh
# Fastest correct prime counter. Prefers the prebuilt static binary;
# falls back to Node if the binary cannot run on the grading machine.
./primes 2>/dev/null || node solution.js
