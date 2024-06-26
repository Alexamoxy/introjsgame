function openDoor(key, code) {
  if (key && code > 100) {
    console.log("Двері магічно відчиняються!");
  } else if (!key || code <= 100) {
    console.log("Двері залишаються закритими міцно.");
  } else {
    console.log("Хм... Нічого не відбувається.");
  }
  switch (code) {
    case 42:
      console.log("Відповідь на все! Двері розкриваються широко.");
      break;
    case 7:
      console.log("Щасливий номер 7! Двері скрипляться відчиняються.");
      break;
    case 13:
      console.log("Нещасливе число 13! Двері захлопуються.");
      break;
    default:
      console.log("Хм... Нічого не відбувається з цим кодом.");
      break;
  }
}

// Тестуємо функцію з різними комбінаціями значень key та code
// openDoor(true, 105); // Виведе: Двері магічно відчиняються! Хм... Нічого не відбувається.
// openDoor(false, 99); // Виведе: Двері залишаються закритими міцно. Хм... Нічого не відбувається з цим кодом.
// openDoor(true, 42); // Виведе: Двері залишаються закритими міцно.  Відповідь на все! Двері розкриваються широко.
// openDoor(false, 7); // Виведе: Двері залишаються закритими міцно. Щасливий номер 7! Двері скрипляться відчиняються.
