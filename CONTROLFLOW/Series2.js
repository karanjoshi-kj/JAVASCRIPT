n = 20;
a = ["1"];
even = 2;
odd = 3;
for (i = 1; i < n; i++) {
  a.push(`+ ${even}/${odd}`);
  even += 2;
  odd += 2;
}

console.log(...a);