export const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  // Mientras queden elementos a mezclar...
  while (currentIndex !== 0) {
    // Selecciona un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E intercámbialo con el elemento actual.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

//const shuffledQuizQuestions = shuffle([...quizQuestions]);
