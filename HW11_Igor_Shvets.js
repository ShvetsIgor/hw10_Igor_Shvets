let litmir = [
    {author: 'Orwell', title: 1984},
    {author: 'Nesbo', title: 'Knife'},
    {author: 'Caroll', title: 'Alice in Wonderland'},
    {author: 'Gogol', title: 'Viy'}
];

function mySort(obj) {
    return obj.sort((a, b) => a.title.localeCompare(b.title));
}

console.log(mySort(litmir));

let results = [
    {name: 'Vasya', points: 150},
    {name: 'Moshe', points: 120},
    {name: 'Lisa', points: 100},
    {name: 'Boruh', points: 150},
    {name: 'Sam', points: 120},
    {name: 'Lida', points: 200},
]

console.log(results.sort((a, b) => {
    if (a.points !== b.points)
        return b.points - a.points; //сортируем от большего к меньшему (DESC)
    else {
        return a.name.localeCompare(b.name); //при одинаковых - сортируем от меньшего к большему (ASK)
    }}));
