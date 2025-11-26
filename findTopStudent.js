const findTopStudent = (students) => {
  if (!students || students.length === 0) {
    console.log("Нет студентов для оценки");
    return null;
  }

  const validStudents = students.filter((student) => student.score > 0);

  if (validStudents.length === 0) {
    console.log("Все студенты имеют 0 баллов");
    return null;
  }

  const maxScore = Math.max(...validStudents.map((s) => s.score));
  const topScorers = validStudents.filter((s) => s.score === maxScore);

  let winner;
  if (topScorers.length === 1) {
    winner = topScorers[0];
  } else {
    winner = topScorers.sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  }

  console.log(
    `Поздравляем ${winner.name}! Вы заняли первое место с ${winner.score} баллами!`
  );
  return winner;
};

module.exports = findTopStudent;
