"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Nicholas Le
   Date: 03/15/19  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
//Global Variables
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;

window.onload = init;

// sets up the initial conditions of the puzzle.
function init() {
      allLetters = document.querySelector("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataset.clueA;
      var downID = currentLetter.dataset.clueD;
      acrossClue = document.getElementById("across");
      downClue = document.getElementById("down");

}
// function will format the colors of the crossword table cells and the clues
function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      for (var i = 0; i <= allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
            acrossClue = currentLetter.dataset.clueA;
            acrossClue.style.color = "blue";
            wordLetters = document.querySelectorAll("currentLetter.dataset.clueA");
            wordLetters.style.backgroundColor = "rgb(231, 231, 255)";
      }

      for (var i = 0; i <= allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
            downClue = currentLetter.dataset.clueD;
            downClue.style.color = "red";
            wordLetters = document.querySelectorAll("currentLetter.dataset.clueD");
            wordLetters.style.backgroundColor = "rgb(255, 231, 231)";
      }
}











/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}