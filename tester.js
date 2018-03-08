alert('Вас приветствует приложение "Алкотестер"');
alert('Сейчас вам будет предложено решить '+
	'несколько примеров для установления степени опьянения.');
alert('Удачи!');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomNumber() {
    const max = 10;
    const min = -10;
    const rand = random(min, max - 1);
    return rand ? rand : max;
}

function MathOperation(Operation, first, second) {
    switch (Operation) {
        case 0:
            return first + second;
        case 1:
            return first * second;
        case 2:
            return first - second;
        case 3:
            return Math.round((first / second) * 10) / 10;
    }
} do {
   
    const first = RandomNumber();
    const second = RandomNumber();
    const Operation = random(0, 3);
    const znak = ['+', '*', '-', '/'];
    const result = MathOperation(Operation,first, second);
    if (second > 0) {
        alert(`${first} ${znak[Operation]} ${second} = `);
    }
    else {
        alert(`${first} ${znak[Operation]} (${second}) = `);
    }
    const answer = prompt('Введите ответ:');
    if (answer == result) {
        alert('Наливай ещё!');
    }
    else {
        alert('Харэ бухать!!!');
        break;
    }
} while (true);