// Requirement 3: Let variable 1 & Requirement 3: Array (list)
let list = [3, 12, 5, 18, 7];
// Requirement 3: Let variable 2
let evenSum = 0;
// Requirement 3: Let variable 3
let oddSum = 0;

// Requirement 1: Loop 1
for (let i = 0; i < list.length; i++) {
  // Requirement 2: Conditional 1
  if (list[i] % 2 === 0) {
    evenSum += list[i];
  }
}

let k = 0;
// Requirement 1: Loop 2
while (k < list.length) {
  // Requirement 2: Conditional 2
  if (list[k] % 2 !== 0) {
    oddSum += list[k];
  }
  k++;
}

console.log(evenSum, oddSum);