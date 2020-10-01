// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const categoriesEl = document.querySelector(ul);
// console.log(categoriesEl)

const categoriesEl = document.getElementById("categories");
console.log(categoriesEl);
console.log(`В списке ${categoriesEl.childElementCount} категории`);

const itemEl = document.querySelectorAll('.item');
console.log(itemEl);
const searchEl = itemEl.querySelectorAll('.item');
console.log(searchEl);