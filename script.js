// var button = document.getElementsByClassName('enter')[0];
// var input = document.getElementById("input");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// };
// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// }; 

// function addListAfterClick() {
// 	if (input.value.length > 0) {
// 	createListElement()}

// };

// function addListAfterKeypress(event) {
// 	if (input.value.length > 0 && event.keyCode === 13) {
// 	createListElement();
// };
// };

// button.addEventListener("click",  addListAfterClick );

// input.addEventListener("keypress", addListAfterKeypress);


// function isUserValid(bol) {
// 	return bol;
// };
// var answer = isUserValid(false) ? "fuckup" : "not available"


// function moveCommand(direction) {
// 	var whatHappens;
// }

Class and Methods
// class Player {
// 	constructor(name, type) {
// 		console.log("player", this)
// 		this.name = name;
// 		this.type = type;

// 	}
// 	introduce() {
// 		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
// 	};
// }
// class Wizard extends Player {
// 	constructor(name, type) {
// 		super(name, type)
// 		console.log("wizard", this);
		

// 	}
// 	play() {
// 		console.log(`Weeee I'm a ${this.type}`)
// 	}
// }

// const Wizard1 = new Wizard('Sheely', 'Healer');
// const Wizard2 = new Wizard('Shawn', 'Dark Magic');
ES7
// const pets= ['cat', 'dog', 'bat'];
// pets.includes("d")
// const square = (x) => x**5
// console.log(square(9))


ES8
const fun = (a,b,c,d) => {
	console.log(a)
}
let obj = {
	username: "Santa",
	username: "Sandy",
	username: "Sade",

}
Object.values(obj).forEach(value => 
	console.log(value)
	)
Object.keys(obj).map()



const flattened = [[0,1], [2,3] ,[4,5]].reduce(
	(accumulator,array) => {
		return [].concat([0, 1])
	}, []
	);


// call stack 
First in Last Out
filo


var todos = [
'clean room',
"brush teeth",
"exercise",
'study javascript',
"eat healthy"];

for (var i=0, i<todos.length; i++) {
	todos[i].pop()
}


var counterOne = 200;
while (counterOne > 10) {
	console.log(counterOne);
	counterOne++;
}

var counter = 0;
do {
	console.log(counter);
	counter++;
} while {
	counter < 90;
}
























// ASYNCHRONOUS programming
console.log("1");
setTimeout(()
 => { console.log('2')}, 5000);