//'use strict';
for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i + ` - это число равно ${getWordNum(i)} , оно является четным`);
    } else if (i % 2 == 0) {
        console.log(i + ` - ${getWordNum(i)} четное число`);
    } else {
        console.log(i + ` - ${getWordNum(i)} НЕ четное число`);
    }
}

function getWordNum(num) {


    switch (num) {
        case 0:
            return "нулю";
        case 1:
            return "еденица";
        case 2:
            return "два";
        case 3:
            return "три";
        case 4:
            return "четыре";
        case 5:
            return "пять";
        case 6:
            return "шесть";
        case 7:
            return "семь";
        case 8:
            return "восемь";
        case 9:
            return "девять";
        case 10:
            return "десять";


    }
}