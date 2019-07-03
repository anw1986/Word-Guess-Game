// References

// https://stackoverflow.com/questions/28007949/how-to-convert-array-into-string-without-comma-and-separated-by-space-in-javascr/28007965

//https://www.quora.com/How-do-you-play-audio-files-on-Javascript

//https://www.quora.com/How-do-you-insert-an-image-in-Javascript

// Initialize variables when page loads
var count_guess = 10;
var userguess = [];
var answer = [];
var blank_answer = [];
var x = 0;
var win = 0;
var loss = 0;

// initialize hint for country when page loads
var hintPakistan = ["Second Tallest Mountain In The World", "Country Of Oldest Salt Mine", "Markhor is the National Animal", "Largest producer of handsewn soccer balls", "The oldest covilization exist in this country", "The country name translates to Land of the Pure"];
var hintIndia = ["Largest democracies in the world", "Belongs to the continent of Asia", "Former British colony", "Largest tea producer", "World largest milk producer", "Has a seven wonder of the world"];
var hintFrance = ["Notre-Dame", "Louvre Museum", "One of the four grand slam tennis eventsis held every year", "Has the highest number of Nobel Prizes for Literature", "Napoleon", "D-Day landings"];
var hintRussia = ["Non OPEC member", "1.8 times the size of the US", "Hosted the 1980 Summer Olympic Games", "Greatest Seige in WW II", "Has more billionaires per capita than anywhere else in the world", "Roman Abramovich"];

// array object of country facts

var countryFacts = [{
    flag: "./assets/images/pkFlag.png",
    audio: "./assets/images/pk.mp3",
    fact: "Pakistan is officially called the Islamic Republic of Pakistan. Pakistan became independent in from the British Indian Empire in 1947. The official currency of Pakistan is the Pakistani rupee. Cricket is the most popular sport in Pakistan "
},
{
    flag: "./assets/images/india.png",
    audio: "./assets/images/india.mp3",
    fact: "India is officially known as the Republic of India. It became independent from the British Indian Empire on 15th August 1947 just one day after Pakistan. Once British rule was over, India was split into the Republic of India and the Islamic Republic of Pakistan. It is the second largest English-speaking country in the world. Many different languages are spoken in India. The main ones are Hindi, Bengali, Telugu, Marathi, Tamil, and Urdu. The Indian subcontinent was home to the Indus Valley Civilisation."
},

{
    flag: "./assets/images/france.png",
    audio: "./assets/images/france.mp3",
    fact: "France has 28 UNESCO World Heritage Sites. It is the largest country in the EU. ‘Liberty, equality and fraternity’ (or brotherhood) is the national motto of France. Europe’s highest mountain is in the French Alps. Eiffel Tower, Notre Dame, Louvre, Montmartre, Arc de Triomphe, the river Seine and many other great attractions. Normandy were the cite for D-day landings"
},

{
    flag: "./assets/images/russia.png",
    audio: "./assets/images/russia.mp3",
    fact: "The official name for Russia is the Russian Federation. Russia shares borders with many countries, including China, Ukraine, North Korea and Norway. Russia is located across 9 time zones & in terms of land area, is the largest country in world. The currency used in Russia is the ruble. The Soviet Union (USSR) was a socialist state that occupied much of northern Asia and eastern Europe from 1922 until it was dissolved in 1991. Former Soviet states include Lithuania, Georgia, Latvia, Ukraine, Kazakhstan and others. The world’s first satellite, named Sputnik, was launched by the Soviet Union in 1957. Russia has a wide range of natural resources and is one of the world’s largest producers of oil."
}

];

// Output inital counter variables on html
document.getElementById("guess_left").innerHTML = count_guess;

// initialize computer guess on clicking start button document.getElementById('startGame').onclick=function()

document.getElementById('startGame').onclick=function() {

    userguess = [];
    answer = [];
    blank_answer = [];
    count_guess = 10
    userguess = [];
    x = 0;

    document.getElementById("guess_left").innerHTML = count_guess;
    document.getElementById("guess").innerHTML = userguess;
    document.getElementById("hintText").innerHTML = "Click the button for hint";
    document.getElementById("interstingFact").innerHTML = "";
    document.getElementById("imageFlag").src = "./assets/images/Capture-flag.JPG";
    document.getElementById("nationalAnthem").src = "";


    var country_lib = ["Pakistan", "India", "France", "Russia"];
    var comp_guess = country_lib[Math.floor(Math.random() * country_lib.length)].toLowerCase();
    console.log(comp_guess);
    console.log(comp_guess.length);

    //initialize __(blank) array with dashes __ 

    for (var i = 0; i < comp_guess.length; i++) {
        blank_answer[i] = "_"
    }
    console.log(blank_answer);

    //print _ (blanks) in the country 

    document.getElementById("country").innerHTML = blank_answer.join(' ');

    //loadHint array based on user guess
    if (comp_guess === "pakistan") {
        var loadHint = hintPakistan;
    };

    if (comp_guess === "india") {
        var loadHint = hintIndia;
    }

    if (comp_guess === "russia") {
        var loadHint = hintRussia;
    }

    if (comp_guess === "france") {
        var loadHint = hintFrance;
    }

    // When the hint is clicked...document.getElementById('#hintButton').onclick=function()
    document.getElementById('hintButton').onclick = function () {
        // We generate a random number between 0 and length of hint array 
        var number = Math.floor((Math.random() * loadHint.length));
        // We display the fact from the loadHint that is in the random position we just generated.
        // $("#hintText").text(loadHint[number]);
        document.getElementById('hintText').innerHTML=loadHint[number];
    }

document.onkeyup = function (event) {

    //check if stat button has been clicked

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

            // debugger;

            // store index position of the comp_guess word and user guess letter 
            var indices = [];
            for (var i = 0; i < comp_guess.length; i++) {
                if (comp_guess[i] === userguess[x]) indices.push(i);
            };

            // debugger;
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
                if (comp_guess === "pakistan") {

                    document.getElementById("imageFlag").src = countryFacts[0].flag;
                    document.getElementById("nationalAnthem").src = countryFacts[0].audio;
                    document.getElementById("interstingFact").innerHTML = countryFacts[0].fact;
                    return;
                };
                if (comp_guess === "india") {

                    document.getElementById("imageFlag").src = countryFacts[1].flag;
                    document.getElementById("nationalAnthem").src = countryFacts[1].audio;
                    document.getElementById("interstingFact").innerHTML = countryFacts[1].fact;
                    return;
                };
                if (comp_guess === "france") {

                    document.getElementById("imageFlag").src = countryFacts[2].flag;
                    document.getElementById("nationalAnthem").src = countryFacts[2].audio;
                    document.getElementById("interstingFact").innerHTML = countryFacts[2].fact;
                    return;
                };
                if (comp_guess === "russia") {

                    document.getElementById("imageFlag").src = countryFacts[3].flag;
                    document.getElementById("nationalAnthem").src = countryFacts[3].audio;
                    document.getElementById("interstingFact").innerHTML = countryFacts[3].fact;
                    return;
                };
            }
            x++;
        }

        // debugger;
    };
};
}





// document.getElementById("loss").innerHTML = loss;



