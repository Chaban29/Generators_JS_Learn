'use strict';

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

let one = generator.next();
let two = generator.next();
let third = generator.next();
let four = generator.next();
console.log(`  ${JSON.stringify(one)}
  ${JSON.stringify(two)}
  ${JSON.stringify(third)} ${JSON.stringify(four)}`);

let sequence = [0, ...generateSequence()];

alert(sequence);

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]);

let range_1 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

let result = [];

for (let key of range_1) {
  result.push(key);
}

console.log(result);

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordWords() {
  for (let i = 48; i <= 57; i++) yield i;
  yield* generateSequence(65, 90);
  yield* generateSequence(97, 122);
}

let str = '';

for (let code of generatePasswordWords()) {
  str += String.fromCharCode(code);
}

console.log(str);

function* gen() {
  let result = yield '3 + 2 = ?';
  console.log(result);
}

let generator_4 = gen();

let question = generator.next().value;

setTimeout(() => {
  generator.next(5);
}, 2000);

function* gen() {
  let ask = yield `2 + 5 = ?`;
  console.log(ask);
  let ask_2 = yield `3 * 3 = ?`;
  console.log(ask_2);
}

let generator_3 = gen();

console.log(generator.next().value);
console.log(generator.next(7).value);
console.log(generator.next(9).done);

function* generate() {
  let result = yield '2 + 2 = ?'; // Помилка в цьому рядку
}

let generator_1 = generate();

let question_1 = generator.next().value;

try {
  generator_1.throw(new Error('Відповідь не знайдено в моїй базі даних'));
} catch (e) {
  alert(e); // покаже помилку
}

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log(g.next(), g.return('foo'), g.next());

function* pseudoRandom(seed) {
  let value = seed;
  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

let generator_2 = pseudoRandom(1);

alert(generator_2.next().value);
alert(generator_2.next().value);
alert(generator_2.next().value);
