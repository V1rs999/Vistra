// Напишіть функцію, яка приймає натуральне число n, підсумовує всі кубічні значення від 1 до n (включно) і повертає цю суму.

// Припустимо, що вхід n завжди буде додатним цілим числом.

// Приклади: (Введення -- вихід)

function sumCubes(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result.map(el => Math.pow(el, 3)).reduce((a, b) => a + b);
}

const nativeNull = () => null;
module.exports = { sumCubes, nativeNull };
// expect(sum(41, 1)).toBe(42);
