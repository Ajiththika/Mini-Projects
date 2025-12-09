const answers = document.querySelectorAll('#answersList li');

answers.forEach(answer => {
  answer.addEventListener('click', () => {
    // Remove previous highlights
    answers.forEach(a => a.classList.remove('correct', 'incorrect'));

    // Highlight clicked answer
    if (answer.dataset.correct === "true") {
      answer.classList.add('correct');
    } else {
      answer.classList.add('incorrect');
    }
  });
});
