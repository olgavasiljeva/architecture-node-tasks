const findTopStudent = require("./findTopStudent");
const studentGroups = require("./testData");

describe("findTopStudent", () => {
  test("Группа 1: Ivan побеждает (35 баллов, раньше завершил)", () => {
    const winner = findTopStudent(studentGroups[0]);
    expect(winner).toEqual({
      name: "Ivan",
      score: 35,
      date: "2022-10-11",
    });
  });

  test("Группа 2: Marina побеждает (25 баллов, самая ранняя дата)", () => {
    const winner = findTopStudent(studentGroups[1]);
    expect(winner).toEqual({
      name: "Marina",
      score: 25,
      date: "2022-10-01",
    });
  });

  test("Группа 3: Нет победителя (все имеют 0 баллов)", () => {
    const winner = findTopStudent(studentGroups[2]);
    expect(winner).toBeNull();
  });

  test("Пустой массив возвращает null", () => {
    const winner = findTopStudent([]);
    expect(winner).toBeNull();
  });

  test("Undefined возвращает null", () => {
    const winner = findTopStudent(undefined);
    expect(winner).toBeNull();
  });

  test("Один студент с баллами > 0 побеждает", () => {
    const students = [{ name: "Alex", score: 10, date: "2022-10-10" }];
    const winner = findTopStudent(students);
    expect(winner).toEqual({
      name: "Alex",
      score: 10,
      date: "2022-10-10",
    });
  });
});
