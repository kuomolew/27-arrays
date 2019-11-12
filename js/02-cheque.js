// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

class Item {
    constructor (name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

let list = [
    bread = new Item('bread', 1, 15),
    beer = new Item('beer', 6, 35),
    chips = new Item('chips', 2, 30),
    oranges = new Item('orange', 8, 10),
    cake = new Item('cake', 50, 1),
    bananas = new Item('banan', 6, 5),
];

let showItems = function(arr) {
    console.log('**************************');
    for (item of arr) {
        console.log(`${item.name} - ${item.quantity} pieses, ${item.price}$ each`);
    }
    console.log('**************************');
}

let total = function(arr) {
    let total = 0;
    for (item of arr) {
        total += item.price*item.quantity;
    }
    console.log(`Total - ${total}$`);
    return total;
}

let mostExpensive = function(arr) {
    let mostExpensive = current =  0;
    let forWhat = '';
    for (item of arr) {
        current = item.price*item.quantity;
        if (current > mostExpensive) {
            mostExpensive = current;
            forWhat = item.name; 
        }
    }
    console.log(`Most expensive was ${forWhat} with the cost of ${mostExpensive}$`);
}

let average = function(arr) {
    //total(arr);
    let all = total(arr);
    let number = arr.length;
    let average = (all/number).toFixed(2);
    console.log(`Average price is ${average}$`);
}

showItems(list);
total(list);
mostExpensive(list);
average(list);
