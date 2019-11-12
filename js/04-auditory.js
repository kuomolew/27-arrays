// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

class Auditory {
    constructor(name, sits, faculty) {
        this.name = name;
        this.sits = sits;
        this.faculty = faculty;
    }
}

class Group {
    constructor(name, quantity, faculty) {
        this.name = name;
        this.quantity = quantity;
        this.faculty = faculty;
    }
}

let audi_1 = new Auditory('1', 15, 'medical');
let audi_2 = new Auditory('2', 11, 'pharmaceutical');
let audi_3 = new Auditory('3', 10, 'pediatric');
let audi_4 = new Auditory('4', 18, 'stomatological');
let audi_5 = new Auditory('5', 17, 'medical');
let audi_6 = new Auditory('6', 20, 'medical');
let audi_7 = new Auditory('7', 14, 'pediatric');
let audi_8 = new Auditory('8', 11, 'pharmaceutical');
let audi_9 = new Auditory('9', 12, 'stomatological');
let audi_10 = new Auditory('10', 16, 'medical');

let group_10m = new Group('10m', 10, 'medical');
let group_13m = new Group('13m', 13, 'medical');
let group_20m = new Group('20m', 20, 'medical');
let group_11s = new Group('511s', 11, 'stomatological');
let group_17s = new Group('17s', 17, 'stomatological');
let group_10p = new Group('10p', 10, 'pediatric');
let group_14p = new Group('14p', 14, 'pediatric');

let auditorias = [audi_1, audi_2, audi_3, audi_4, audi_5, audi_6, audi_7, audi_8, audi_9, audi_10];
//console.log(auditorias);


// Вывод на экран всех аудиторий;
let showAllAudi = function(arr) {
    for (item of arr) {
        console.log(`Auditory ${item.name} - ${item.sits} sits, ${item.faculty} faculty`);
    }
}

// Вывод на экран аудиторий для указанного факультета;
let showAudyFaculty = function(arr, faculty) {
    for (item of arr) {
        if (item.faculty == faculty) {
            console.log(`Auditory ${item.name} - ${item.sits} sits, ${item.faculty} faculty`);
        }
    }
}

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
let showSuitable = function(audi, group) {
    for (item of audi) {
        if (item.sits >= group.quantity && item.faculty === group.faculty) {
            console.log(`Auditory ${item.name} - ${item.sits} sits, ${item.faculty} faculty`);
        }
    }
}

// Функция сортировки аудиторий по количеству мест;
let sortBySits = function(audi) {
    audi.sort((a,b) => {
        return a.sits - b.sits;
    });
    for (item of audi) {
        console.log(`Auditory ${item.name} - ${item.sits} sits, ${item.faculty} faculty`);
    }
}

// Функция сортировки аудиторий по названию (по алфавиту).
let sortByName = function(audi) {
    audi.sort((a,b) => {
        return a.name - b.name;
    });
    for (item of audi) {
        console.log(`Auditory ${item.name} - ${item.sits} sits, ${item.faculty} faculty`);
    }
}

//showAllAudi(auditorias);
//showAudyFaculty(auditorias, 'stomatological');
//showSuitable(auditorias, group_14p);
//sortBySits(auditorias);
sortByName(auditorias);