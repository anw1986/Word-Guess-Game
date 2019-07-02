# Word-Guess-Game

This project is a HW requirement. In this project of the word guess game, I have created a country guess game. The user has 10 lives/guesses to determine the country. 

## Getting Started

This project is a hangman versioned country guess game. In this game the user needs to guess the country & gets 10 guesses. In order to get started, once the page loads, click on the **Start** button. To assist user, a **randomised** hint button has been created, which provides random hint associated with the country. If the user is able to guess with 10 chances, the page loads a flag, national anthem and interesting facts. Let's start playing.

## User Test

Every effort has been put in to capture user exceptions including
* Game begins only when the **Start** button is clicked
* At the end of the game the user needs to press the **Start** button again to re-start and everything clears
* Loading country's national anthem using audio player
* The user can **ONLY** enter letters
* The user is alerted if the letter has already been guessed 

### Coding tests

The code has been thorougly checked but exceptions are always there. 

This code checks if the user only enters letters & checks if the letter is not a duplicate guess. Nested if

```
      if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {

            if (userguess.includes(String.fromCharCode(event.keyCode).toLowerCase()) === true) {
                alert("letter already exist");
```

Also an array object was created to incoporate multiple data points for the country. However, the use of functions and object methods is limited

```
var countryFacts = [{
    flag: "./assets/images/pkFlag.png",
    audio: "./assets/images/pk.mp3",
    fact: "Pakistan is officially called the Islamic Republic of Pakistan. Pakistan became independent in from the British Indian Empire in 1947. The official currency of Pakistan is the Pakistani rupee. Cricket is the most popular sport in Pakistan "
},
{
    flag: "./assets/images/india.png",
    audio: "./assets/images/india.mp3",
    fact: "India is officially known as the Republic of India. Pakistan became independent from the British Indian Empire on 15th August 1947 just one day after Pakistan. Once British rule was over, India was split into the Republic of India and the Islamic Republic of Pakistan. Later, an area between India and Pakistan became the People's Republic of Bangladesh. Many different languages are spoken in India. The main ones are Hindi, Bengali, Telugu, Marathi, Tamil, and Urdu. "
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

```

## Built With

* [Bootstrap](https://getbootstrap.com/) - To build responsive website

## Authors

* **Ahmed Waheed** - *Home work 2* - [Github Profile](https://github.com/anw1986) -[Portfolio](https://anw1986.github.io/Basic-Portfolio/)

## Acknowledgments

* Inspiration - Pre-work HW about grumpy cats

