// "use strict"
// Мінімум
// I. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
// обсяг паливного баку, середня витрата палива на 100 км., водій), і наступні методи для роботи з цим об'єктом:
let car = {
    producer: "Fiat",
    model: 500,
    year: 2022,
    averageSpeed: 120,
    tankVolume: 40,
    petrolConsumption: 5,
    driver: 'Miller',
}

//  1) Метод, який виводить на екран інформацію про автомобіль.
let showInfo = function(obj) {
    let res = '';
    for (let key in obj) {
        res += (`${key}:${car[key]}  `)
    };
    return res;
};
console.log(showInfo(car));

//  2) Зміна імені водія
let driver = function(name) {
    this.driver = name;
};
car.driver = driver;
car.driver('Smit');
console.log(car.driver);

//  3) Метод для перевірки імені водія
function checkDriver (x) {
    if ('driver' in x) {
        return x.driver;
    }
};
console.log(checkDriver(car));

//  4) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
let calcTravel = function (obj) {
    let distance = +prompt('enter the distance');
    if (typeof distance !== "number" || isNaN(distance) || distance < 0) {
        return "It's not a distance";
    } else {
        let time = distance / obj.averageSpeed;
        if (time > 4) {
            time = (time + time/4);
        }
        time = time.toFixed(1);
        let petrol = Math.ceil(distance / 100 * obj.petrolConsumption);
        return `Машина проїде ${distance} км за ${time} годин i витратить ${petrol} літрів палива`;
    }
}
console.log(calcTravel(car));


// Норма
// II. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//  1) Для виведення часу на екран.
//  2) Зміни часу на передану кількість секунд.
//  3) Зміни часу на передану кількість хвилин.
//  4) Зміни часу на передану кількість годин.
//  5) Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    showTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
    addSeconds(sec) {
        if (typeof sec !== "number" || isNaN(sec) || sec < 0) {
            return console.log('No such seconds');
        } else {
            this.seconds = sec % 60;
            if (sec > 59 ) {
                this.minutes += Math.floor(sec / 60);
            }
            return this.minutes, this.seconds;
        }
    },
    addMinutes(minut) {
        if (typeof minut !== "number" || isNaN(minut) || minut < 0) {
            return console.log('No such minutes');
        } else {
            this.minutes += minut % 60;
            if (minut > 59) {
                this.hours += Math.floor(minut / 60);
            }
            return this.minutes, this.hours;
        }
    },
    addHours(hour){
        if (typeof hour !== "number" || isNaN(hour) || hour < 0) {
            return console.log('No such hours');
        } else return this.hours += hour;
    },
}
time.addSeconds(61);
time.addMinutes(60);
time.addHours(6);
time.showTime();


// Максимум
// III. Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
//  1) Складання 2-х об'єктів-дробів.
//  2) Віднімання 2-х об'єктів-дробів.
//  3) Множення 2-х об'єктів-дробів.
//  4) Ділення 2-х об'єктів-дробів.
//  5) Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)
let fractions = {
    x: {
        a: 0,
        b: 1,
        c: 5
    },
    y: {
        a: 0,
        b: 5,
        c: 1
    },
    getSum() {
        let aSum = this.x.a + this.y.a;
        let bSum = this.x.b * this.y.c + this.y.b * this.x.c;
        let cSum = this.x.c * this.y.c;
        if (bSum > cSum) {
            aSum += 1;
            bSum -= cSum;
        } else if (bSum == cSum) {
            aSum += 1;
            return aSum;
        }
        gcdBC = this.gcd(bSum, cSum);
        bSum = bSum / gcdBC;
        cSum = cSum / gcdBC;
        return `${aSum} (${bSum}/${cSum})`;
    },
    getDifference() {
        let aDiff;
        if ((this.x.a == this.y.a) && (this.x.b == this.y.b)  && (this.x.c == this.y.c)) {
            return aDiff = 0;
        } else {
            let bDiff = (this.x.a * this.x.c + this.x.b) * this.y.c - (this.y.a * this.y.c + this.y.b) * this.x.c;
            let cDiff = this.x.c * this.y.c;
            if (Math.abs(bDiff) > cDiff) {
                aDiff = Math.trunc(bDiff / cDiff);
                if (Math.abs(bDiff) % cDiff) {
                    bDiff = Math.abs(bDiff) % cDiff;
                } else {
                    return aDiff;
                }
            } 
            if (bDiff === cDiff) {
                aDiff = 1;
                console.log(aDiff)
                return aDiff;
            } 
            let gcdDiff = this.gcd(bDiff, cDiff);
            bDiff = bDiff / gcdDiff;
            cDiff = cDiff / gcdDiff;
            return `${aDiff} (${bDiff}/${cDiff})`;
        }
    },
    
    getProdact() {
        let bProd = (this.x.a * this.x.c + this.x.b) * (this.y.a * this.y.c + this.y.b);
        let cProd = this.x.c * this.y.c;
        let aProd = 0;
        if(bProd > cProd) {
            aProd = Math.trunc(bProd / cProd);
            if (bProd % cProd) {
                bProd %= cProd;
            } else {
                return aProd;
            }
        }
        if (bProd == cProd) {
            return aProd = 1;
        }
        let gcdProd = this.gcd(bProd, cProd);
        bDiff = bProd / gcdProd;
        cDiff = cProd / gcdProd;
        return `${aProd} (${bProd}/${cProd})`;
    }, 
    getQuotient() {
        let bQuot = (this.x.a * this.x.c + this.x.b) * this.y.c;
        let cQuot = this.x.c * (this.y.a * this.y.c + this.y.b);
        let aQuot = 0;
        if (bQuot > cQuot) {
            aQuot = Math.trunc(bQuot / cQuot);
            if (bQuot % cQuot) {
                bQuot %= cQuot;
            } else {
                return aQuot;
            }
        } 
        if (bQuot == cQuot) {
            return aQuot = 1;
        }
        let gcdBC = this.gcd(bQuot, cQuot);
        bQuot = bQuot / gcdBC;
        cQuot = cQuot / gcdBC;
        return `${aQuot} ${bQuot}/${cQuot}`;
    },
    gcd (arg1, arg2) {
        while (arg1 != arg2) {
            (arg1 > arg2) ? arg1 = arg1 - arg2 : arg2 = arg2 - arg1;
        }
        return arg1;
    },
}
console.log(fractions.getSum());
console.log(fractions.getDifference());
console.log(fractions.getProdact());
console.log(fractions.getQuotient());