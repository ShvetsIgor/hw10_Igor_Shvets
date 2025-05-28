

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min); // 72.236545 -> 72
}

const numbers = new Array(5);

function fiveNumbers(){
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(randomNumber(1, 36));
    }
    return numbers;
}

document.querySelector('button').onclick = function () {
    const answer = fiveNumbers();
    const min = minValue(answer);
    const max = maxValue(answer);
    const avg = average(answer);
    const stats = statistics(min, max, avg);
    document.getElementById("fiveRandomNumbers").innerHTML =
    `<p>${answer.join(" * ")}</p>
    <p>Min Value: ${stats["Min value"]}</p>
    <p>Max Value: ${stats["Max value"]}</p>
    <p>Average: ${stats["Average"]}</p>`;
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





