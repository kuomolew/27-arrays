// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


class Time  {
    constructor (hour, min, sec) {
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }

    showTime() {
        let hour, min,sec;
        if (!this.hour) {
            this.hour = 0;
        } 
        if (!this.min) {
            this.min = 0;
        } 
        if (!this.sec) {
            this.sec = 0;
        }
        if (this.hour < 10) {
            hour = `0${this.hour}`;
        } else {
            hour = `${this.hour}`;
        }
        if (this.min < 10) {
            min = `0${this.min}`;
        } else {
            min = `${this.min}`;
        }
        if (this.sec < 10) {
            sec = `0${this.sec}`;
        } else {
            sec = `${this.sec}`;
        }
        console.log(`${hour}:${min}:${sec}`);
    }

    changeSec(changeSeconds) {
        let seconds =  this.sec + this.min*60 + this.hour*60*60;
        seconds = seconds + changeSeconds;
        this.hour = Math.floor(seconds/3600);
        seconds = seconds % 3600;
        this.min = Math.floor(seconds/60);
        this.sec = seconds % 60;
    }

    changeMin(changeMin) {
        let seconds =  this.sec + this.min*60 + this.hour*60*60;
        seconds = seconds + changeMin*60;
        this.hour = Math.floor(seconds/3600);
        seconds = seconds % 3600;
        this.min = Math.floor(seconds/60);
        this.sec = seconds % 60;
    }

    changeHours(changeHours) {
        let seconds =  this.sec + this.min*60 + this.hour*60*60;
        seconds = seconds + changeHours*60*60;
        this.hour = Math.floor(seconds/3600);
        seconds = seconds % 3600;
        this.min = Math.floor(seconds/60);
        this.sec = seconds % 60;
    }
}

let _12_01_30 = new Time(12,01,30);
let _14 = new Time(14);
_12_01_30.showTime();
_12_01_30.changeSec(457);
_12_01_30.showTime();
// _14.showTime();
// _14.changeSec(-3600);
// _14.showTime();

// let test = new Time();
// console.log(test);
// test.showTime();

// _12_01_30.showTime();
// _12_01_30.changeMin(-60);
// _12_01_30.showTime();

// _12_01_30.showTime();
// _12_01_30.changeHours(-6);
// _12_01_30.showTime();
