const calculateBonus = require('./scripts');

describe('calculateBonus', () => {
  test('возвращает сумму, если она меньше 50', () => {
    expect(calculateBonus(10, 20)).toBe(30);
  });

  test('возвращает сумму, если она равна 50', () => {
    expect(calculateBonus(25, 25)).toBe(50);
  });

  test('возвращает 50, если сумма больше 50', () => {
    expect(calculateBonus(30, 40)).toBe(50);
  });

  test('работает с нулевыми значениями', () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });

  test('работает с одним нулевым значением', () => {
    expect(calculateBonus(0, 30)).toBe(30);
  });

  test('работает с отрицательными числами', () => {
    expect(calculateBonus(-10, 20)).toBe(10);
  });

  test('возвращает 50 для очень больших чисел', () => {
    expect(calculateBonus(100, 200)).toBe(50);
  });

  test('граничный случай: сумма 51', () => {
    expect(calculateBonus(26, 25)).toBe(50);
  });
});