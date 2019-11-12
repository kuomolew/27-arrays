// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

class Product {
    constructor(name, quantity, isBought) {
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }
}
let bread = new Product('bread', 1, false);
let beer = new Product('beer', 6, false);
let chips = new Product('chips', 2, true);
let oranges = new Product('orange', 5, true);
let sweets = new Product('sweets', 3, false);
let bananas = new Product('banan', 8, false);

let list = [bread, beer, chips, oranges, sweets];

let showList = function(arr) {
    arr.sort((a,b)=> {
        return a.isBought - b.isBought;
    })
    
    for (item of arr) {
        console.log(`${item.name} - ${item.quantity}`);
    }
    console.log('--------------');
};

let addItem = function(arr, newItem) {
    if (arr.includes(newItem)) {
        arr[arr.indexOf(newItem)].quantity++;
    } else {
        arr.push(newItem);
    }
}

let isBought = function(arr, item) {
    arr[arr.indexOf(item)].isBought = true;
}

showList(list);
addItem(list, bananas);
showList(list);
addItem(list, beer);
showList(list);
isBought(list, beer);
showList(list);