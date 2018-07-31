//two variables each assigned to a number and output sum to console

var numOne = 12;
var numTwo = 13;

console.log(numOne + numTwo);

//same thing but two strings

var strOne = "hey,";
var strTwo = "what's up?";

console.log(strOne + " " + strTwo);

//multidimensional array.  access miller and pinot.

var wine = ['merlot', 'cabernet', 'pinot'];
var beer = ['bud', 'miller', 'coors'];
var alcohol = [wine, beer];

console.log(alcohol[1][1]);
console.log(alcohol[0][2]);

//press "try it" button to activate prompt.  enter number < or > 100.

function ent() {
    
    var numE = prompt("Please enter a number:");
    
    if (numE == null || numE == "") {
        alert("User cancelled the prompt.");
    } else if (numE < 100) {
        alert("Your number is less than 100.");
    } else {
        alert("Your number is" + numE + " which is >= to 100");
    }
}

//click "try again" button to guess hidden word.  enter a word.

function wrd() {
    
    var numE = prompt("Please guess a word:");
    
    if (numE == null || numE == "") {
        alert("User cancelled the prompt.");
    } else if (numE === "trom") {
        alert("You guessed it!");
    } else {
        alert("Wrong!");
    }
}

//fx which takes names as arg and tells user what entered

function myFx(name) {
    alert("you entered " + name);
}

// myFx('Brian')


//fx which takes no arg but prints something to console

function silent() {
    console.log("can print to console still");
}

// silent()

//click pick door to pick one of 4 doors

function door() {

    var enter = prompt("Please pick door 1, 2, 3, or 4");

    if (enter == 1){
        return alert("you get candy!");
    }else if (enter == 2){
        return alert("you get a porshe!");
    }else if (enter == 3){
        return alert("you get a hat!");
    }else { 
        return alert("you don't get crap!");
    }   
}
