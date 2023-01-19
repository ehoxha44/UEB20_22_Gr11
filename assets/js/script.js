// Number:
let length = 16;
var weight = 7.5;

// String:
let color = "Yellow";
var lastName = "Johnson";

// Boolean:
let x = true;
var y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array:
const cars = ["Saab", "Volvo", "BMW"];

const cmimi1 = 5;
const cmimi2 = 6;
var cmimi3 = 12;
let total = cmimi1 + cmimi2 + cmimi3;
console.log(total)

const news = [
    {
        page: 1,
        channel: "BBC",
        views: 812,
        category: "World"
    },
    {
        page: 2,
        channel: "Sky",
        views: 1003,
        category: "World"
    },
    {
        page: 3,
        channel: "Klan",
        views: 154,
        category: "Kronike e zeze"
    },
    {
        page: 4,
        channel: "RTK",
        views: 99,
        category: "Politike"
    },
    {
        page: 5,
        channel: "KTV",
        views: 54,
        category: "Kronike e zeze"
    }
]

// reduce qe kthen shumen e shikimeve nga vargu i objekteve me larte

var totalViewers = news.reduce(function(acc, item){
    return acc + item.views + item.views*1
}, 0)

console.log("Totali: ", totalViewers)

// filter qe kthejne kategorine e kerkuar nga vargu i objekteve me larte
const world = news.filter(function(item){
    return item.category === "World"
})

const politike = news.filter(function(item){
    return item.category === "Politike"
})

console.log("World: ", JSON.stringify(world, null, 1))
console.log("Politike: ", JSON.stringify(politike, null, 1))

// funksioni i cili ne array shton elemente te reja

function extendArray(source, ...items) {
    return [...source, ...items]
}
let nums = [1, 2, 3, 4, 5]
console.log(extendArray(nums, 10, 20, 30, 40))

// funksioni qe mundeson ngritjen ne fuqi te nje numri 
// exception: Fuqia nuk guxon te jete me e madhe se 100

function power(x, y) {
    if(y > 100) throw "y nuk guxon te jete me e madhe se 100"
    return x ** y
}
try {
    console.log(power(10, 5))
    console.log(power(10, 105))
} catch (e) {
    console.log(e)
}

// funksioni qe llogarit ndryshimin e shumes se numrave çift dhe tek nga 1 deri në 10

let sc = 0
let st = 0
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 0) 
    sc += i
    else 
    st += i
}
console.log(sc - st)

// funksioni qe llogarite prodhimin e numrave te dhene si argumente

function prodhimi(...args) {
    let p = 1
    for(i in args) {
        p *= args[i]
    }
    return p
}
console.log(prodhimi(3,4,5))

// funksioni qe llogarit shumen e elementeve ne pozicionet tek

let sit = 0
let array1 = [10, 50, 45, 23, 1, 3, 6, 9, 12]
for(let i = 0; i < array1.length; i++) {
    if(i % 2 !== 0) 
    sit += array1[i]
}
console.log(sit)

// funksioni qe mapon (shumezon me 2) vlerat çift te nje array

let numbers = [10, 1, 3, 6, 9, 12]
function mapNumbers(numbers) {
    return numbers.map(n => (n % 2 == 0) ? n*2 : n)
}
console.log(mapNumbers(numbers))

// shtimi i emrave ne array duke perdorur callback function

const listaEmrave = {
    names: [],
    onNewName: null,

    init: function (newNameCallback){
        this.onNewName = newNameCallback
    },

    addName: function (name) {
        this.names.push(name)
        this.onNewName(name, this.names)
    }
}

listaEmrave.init(function (newName, allNames) {
    console.log(newName)
    console.log("Emrat: " + allNames)
})

listaEmrave.addName("Enis")
listaEmrave.addName("Erijon")
listaEmrave.addName("Cristiano")