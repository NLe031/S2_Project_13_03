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
var typeDirection = "right";

window.onload = init;

// sets up the initial conditions of the puzzle.
function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataset.clueA;
      var downID = currentLetter.dataset.clueD;
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      downClue = document.getElementById(currentLetter.dataset.clueD);
      formatPuzzle(currentLetter);
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.cursor = "pointer";
            allLetters[i].onmousedown = function (e) {
                  formatPuzzle(e.target)
            };
      }
      document.onkeydown = selectLetter;

      var typeImage = document.getElementById("directionImg");
      typeImage.style.cursor = "pointer";
      typeImage.onclick = switchTypeDirection;

      document.getElementById("showErrors").onclick = function () {
            for (var i = 0; i < allLetters.length; i++) {
                  if (allLetters[i].textContent !== allLetters[i].dataset.letter) {
                        allLetters[i].style.color = "red";
                        setTimeout(function () {
                              for (var i = 0; i < allLetters.length; i++) {
                                    allLetters[i].style.color = "";
                              }
                        }, 3000);
                  }
            }
      }

      document.getElementById("showSolution").onclick = function () {
            for (var i = 0; i < allLetters.length; i++) {
                  allLetters[i].textContent = allLetters[i].dataset.letter;
            }
      };

}
// function will format the colors of the crossword table cells and the clues
function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
      }

      acrossClue.style.color = "";
      downClue.style.color = "";

      if (currentLetter.dataset.clueA !== undefined) {
            acrossClue = document.getElementById(currentLetter.dataset.clueA);
            acrossClue.style.color = "blue";
            wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");

            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
            }

      }

      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
      }
      if (currentLetter.dataset.clueD !== undefined) {
            downClue = document.getElementById(currentLetter.dataset.clueD);
            downClue.style.color = "red";
            wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
            }

      }

      if (typeDirection === "right") {
            currentLetter.style.backgroundColor = "rgb(191,191,255)";
      } else {
            currentLetter.style.backgroundColor = "rgb(255,191,191)";
      }
}

// this function is to allow users to select puzzle cells using the keyboard.
function selectLetter(e) {
      var rightLetter = currentLetter.dataset.right;
      var leftLetter = currentLetter.dataset.left;
      var upLetter = currentLetter.dataset.up;
      var downLetter = currentLetter.dataset.down;

      var userKey = e.keyCode;

      if (userKey == 37) {
            formatPuzzle(leftLetter);
      } else if (userKey == 38) {
            formatPuzzle(upLetter);
      } else if (userKey == 39 || 9) {
            formatPuzzle(rightLetter);
      } else if (userKey == 40 || 13) {
            formatPuzzle(downLetter);
      } else if (userKey == 8 || 46) {
            currentLetter = "";
      } else if (userKey == 32) {
            switchTypeDirection();
      }

}

function switchTypeDirection() {

}








/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}