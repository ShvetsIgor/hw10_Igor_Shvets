

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min); // 72.236545 -> 72
    // Math.random() * 1000000 % max + min т.к. при делении с остатком числа - остаток будет любым числом ДО этого числа (n % 36 = 0 - 35)
}

const numbers = new Array(5);

function fiveNumbers(){
    const numbers = [];
    while (numbers.length < 5) { // for -> while
        const num = randomNumber(1, 36);
        if (!numbers.includes(num)) { //check
            numbers.push(num);
        }
    }
    return numbers;
}

document.querySelector('button').onclick = function () {
    const answer = fiveNumbers();
    const min = minValue(answer);
    const max = maxValue(answer);
    const avg = average(answer);
    const stats = statistics(min, max, avg);
    const mySort = sorting(answer);
    const EvenOdd = countEvenOdds(answer)
    document.getElementById("fiveRandomNumbers").innerHTML =
    `<p>${answer.join(" * ")}</p>
    <p>Min Value: ${stats["Min value"]}</p>
    <p>Max Value: ${stats["Max value"]}</p>
    <p>Average: ${stats["Average"]}</p>
    <p>Sorting: ${mySort.join(', ')}</p>
    <p>You have ${EvenOdd}</p>`;
};

function maxValue(arr) {
    return Math.max(...arr);
}
function minValue(arr) {
    return Math.min(...arr);
}
function average(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++)
        sum += arr[i]
    return sum / arr.length;
}

function statistics(minValue, maxValue, average){
    return {
        "Min value": minValue,
        "Max value": maxValue,
        "Average": average,
        }
}

function sorting (arr){
    return arr.slice().sort((a,b) => b - a);
}

function countEvenOdds(arr){
    let resEven = 0;
    let resOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resEven++;
        } else {
            resOdd++
        }
    }
    return resEven + ' even numbers and ' + resOdd + " odd numbers";
}




