// Psuedo Code
// Store list of countries in array
// when game starts computer chooses random country from array
// store computer choice in an array
// user enters guess letter
// search user_guess in computer choice. Loop through length of string

// var str = "scissors";
// var indices = [];
// for(var i=0; i<str.length;i++) {
//     if (str[i] === "s") indices.push(i);
// }

// for(var i=0; i<indices.length;i++) {
//     word[indices[i]]="a";
// }

// https://stackoverflow.com/questions/28007949/how-to-convert-array-into-string-without-comma-and-separated-by-space-in-javascr/28007965

// Initialize variables
var count_guess = 15;
var userguess = [];
var answer = [];
var blank_answer = [];
var x = 0;
var win = 0;
var loss = 0;

// initialize computer guess on page referesh
var country_lib = ["Pakistan", "India", "France", "Russia", "Italy", "Germany", "Mexico", "Canada"];
var comp_guess = country_lib[Math.floor(Math.random() * country_lib.length)].toLowerCase();
console.log(comp_guess);
console.log(comp_guess.length);

// hint for country
var hintPakistan=["pakistan1","pakistan2","pakistan3","pakistan4","pakistan5","pakistan6"];
var hintIndia=["India1","India2","India3","India4","India5","India6"];
var hintFrance=["france1","france2","france3","france4","france5","france6"];
var hintRussia=["russia1","russia2","russia3","russia4","russia5","russia6"];

$("#startGame").on("click",function(){
    alert("start");
})

//loadHint array based on user guess
if (comp_guess==="pakistan"){
    var loadHint=hintPakistan;
}

if (comp_guess==="india"){
    var loadHint=hintIndia;
}

if (comp_guess==="russia"){
    var loadHint=hintRussia;
}

if (comp_guess==="france"){
    var loadHint=hintFrance;
}

// When the hint is clicked...
$("#hintButton").on("click", function() {
	// We generate a random number between 0 and length of hint array 
	var number = Math.floor((Math.random() * loadHint.length));
	// We display the fact from the loadHint that is in the random position we just generated.
	$("#hintText").text(loadHint[number]);
})

//initialize __(blank) array with dashes __ 

for (var i = 0; i < comp_guess.length; i++) {
    blank_answer[i] = "_"
}
console.log(blank_answer);

//print _ (blanks) in the country 

document.getElementById("country").innerHTML = blank_answer.join(' ');

// Output inital counter variables on html
document.getElementById("guess_left").innerHTML = count_guess;
document.getElementById("loss").innerHTML = loss;

document.onkeyup = function (event) {

    //start game with a space bar (need to work)

    var charCode = event.keyCode; //check ascii code for user entry

    //check condition if user enters letters only

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {

        //check condition if element already exist in array

        if (userguess.includes(String.fromCharCode(event.keyCode).toLowerCase()) === true) {
            alert("letter already exist");
        }

        else {

            //if the element is "new" continue code line

            userguess[x] = event.key; //log user guess in the array at index position x
            console.log(userguess);
            console.log(event.key);
            document.getElementById("guess").innerHTML = userguess;

            // check if unable to guess

            if (count_guess === 0) {
                alert("Sorry!! You were unable to guess the country" + " " + comp_guess);
                return;
            }

            count_guess--;
            document.getElementById("guess_left").innerHTML = count_guess;

            // store index position of the comp_guess word and user guess letter 
            var indices = [];
            for (var i = 0; i < comp_guess.length; i++) {
                if (comp_guess[i] === userguess[x]) indices.push(i);
            };

            console.log(indices);

            // store common user guess letter in the answer array

            if (indices.length > 0) {
                for (var j = 0; j < indices.length; j++) {
                    blank_answer[indices[j]] = userguess[x];
                    // debugger;
                    console.log(blank_answer);
                };
            };

            document.getElementById("country").innerHTML = blank_answer.join(' ');

            // check for winning condition

            if (blank_answer.indexOf("_") === -1) {
                alert("Kuddos!! For guessing the country");
            }
            x++;
        }

        // debugger;
    };
};
// document.onkeyup=function(event){

//     var charCode=event.keyCode;

//     console.log(userguess);

//     //check condition if user enters letters only

//     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){

//         //check condition if element already exist in array

//         if(userguess.includes(String.fromCharCode(event.keyCode).toLowerCase())===true){
//             alert("letter already exist");
//         }

//         else{

//             //if the element is "new" continue code line

//             userguess[x]=String.fromCharCode(event.keyCode).toLowerCase();

//             document.getElementById("guess").innerHTML=userguess;

//             count_guess--;
//             document.getElementById("guess_left").innerHTML=count_guess;

//             // Check for win condition

//             if (userguess[x]===comp_choice){
//                 alert("Kuddos!! on guessing the letter" +" "+comp_choice);
//                 win++; 
//                 document.getElementById("win").innerHTML=win;
//                 userguess =[];
//                 document.getElementById("guess").innerHTML=userguess;
//                 count_guess=9;
//                 document.getElementById("guess_left").innerHTML=count_guess;
//                 x=0;

//                 // re-start with new computer guess
//                 comp_choice=comp_letters[Math.floor(Math.random() * comp_letters.length)];
//                 return;
//             };

//             // Check if user is unable to guess

//             if (count_guess===0){
//                 alert("Sorry!! You were unable to guess the letter"+" "+comp_choice);
//                 loss++
//                 document.getElementById("loss").innerHTML=loss;
//                 userguess =[];
//                 document.getElementById("guess").innerHTML=userguess;
//                 count_guess=9;
//                 document.getElementById("guess_left").innerHTML=count_guess;
//                 x=0;

//                 // re-start with new computer guess
//                 comp_choice=comp_letters[Math.floor(Math.random() * comp_letters.length)];
//                 return;
//             };   

//             x++;
//         };
//         console.log(comp_choice);
//     }

//     else{
//         alert("Enter letter only");
//     };
//     // debugger;
// };


