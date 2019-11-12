// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

class CSS {
    constructor(value, property) {
        this.value = value;
        this.property = property;
    }
}

let list = [
    color = new CSS('color', 'red'),
    fontSize = new CSS('font-size', '20px'),
    textDecoration = new CSS('text-decoration', 'underline'),
    textTransform = new CSS('text-transform', 'uppercase'),
];

let text = 'Another text';
let pWriter = function(arr, str) {
    let style = '';
    for (item of arr) {
        style = style + `${item.value}:${item.property};`;
    }
    document.write(`<p style="${style}">${str}</p>`);

}

document.write('<p style="color:blue;">Some text</p>');

pWriter(list, text);