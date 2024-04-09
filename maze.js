function exploreMaze(mazeSize) {
  let position = 1; // Початкова позиція пошуковика
  let step = 0; // Кількість кроків

  console.log("Початок пошуку лабіринту...");

  // Рух вперед по лабіринту з врахуванням перешкод
  while (position <= mazeSize) {
    step++;
    console.log(
      `Крок ${step}: Пошуковик рухається вперед. Позиція: ${position}`
    );
    if (position % 3 === 0) {
      console.log("Перешкода (X) на шляху! Пошуковик обходить її.");
    }
    position++;
  }

  // Рух назад по лабіринту до початкової позиції
  do {
    step++;
    position--;
    console.log(
      `Крок ${step}: Пошуковик рухається назад. Позиція: ${position}`
    );
  } while (position > 1);

  console.log("Кінець пошуку лабіринту.");
}

// Приклад виклику функції з розміром лабіринту 10
exploreMaze(10);
