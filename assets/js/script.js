function makeComputerGuess() {

    return 'guess'
}


// when a button is clicked the button will be passed in
function onButtonClicked(clicked) {

    // get the class name of the button to idendify it
    const button = clicked.className;
    console.log(button);
        if (className = "rock") {
            pRock();
        } else if(className = "paper") {
            pPaper();
        } else if (className = "scissors") {
            pScissors();
        }

//         document.getElementById("rock").textContent = function choice1(){
//            let button = document.getElementsById("button");
//             <button type = "button"></button>
//             button.onclick = function() {
//             pRock();
//    };
//         }
//         document.getElementById("paper").textContent = function choice2(){
//            let button = document.getElementsById("button");
//             <button type = "button"></button>
//             button.onclick = function() {
//             pPaper();
//    };
//         }
//        document.getElementById("scissors").textContent = function choice3(){
//             let button = document.getElementsById("button");
//             <button type = "button"></button>
//             button.onclick = function() {
//             pScissors();
//    };
//}


// generate a computer guess
let guess = Math.floor(Math.random() * 3) + 1;   

if (p2 = "1") {
    p2 = "rock"
    function cRock() {
        let cimage = new image (100, 200)
        cimage.src = "assets/images/rock-pic.jpg"
    }
    cRock
    }
else if (p2 = "2") {
     p2 = "paper"
     function cPaper() {
        let cimage = new image (100, 200)
        cimage.src = "assets/images/paper-pic.jpg"
    }
    cPaper
    }
else if (p2 ="3") {
    p2 = "scissors"
    function cScissors() {
        let cimage = new image (100, 200)
        cimage.src = "assets/images/scissors-pic.jpg"
    }
    cScissors
};


    // compare guesses
};


// add the event listeners on start up
function addEventListeners() {
    // select all buttons
    const buttons = document.querySelectorAll('[button-type="button"]');

    // loop over the selection array
    buttons.forEach(button => {
        // add an event listener to each button
        button.addEventListener('click', event => {
            // the event.currentTarget IS the clicked button
            const clicked = event.currentTarget;

            // pass that button to anotgher function
            onButtonClicked(clicked);
        });
    });
};

// call any function that needs to run at start up inside this function
function init() {
    addEventListeners()
}
init();



// //document.addEventListener("DOMContentLoaded"), function() {
//   //  let buttons = document.getElementsByTagName("button");

// //     for (let button of buttons) {
// //        button.addEventListener("click", function() {
// //            if (this.getAttribute("button") === "button"){
// //                playGame();
// //            }
// //        });
// //    }
// //}

// //let button = document.getElementsById("button");
// //    <button type = "button"></button>
//  //   button.onclick = function() {
// //    playGame();
// //};

// function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
    

//     function whichClick(p1) {
//         document.getElementById("rock").textContent = function choice1(){
//             let button = document.getElementsById("button");
//             <button type = "button"></button>
//             button.onclick = function() {
//             pRock();
// };
//         }
//         document.getElementById("paper").textContent = function choice2(){
//             let button = document.getElementsById("button");
//             <button type = "button"></button>
//             button.onclick = function() {
//             pPaper();
// };
//         }
//         document.getElementById("scissors").textContent = function choice3(){
//             let button = document.getElementsById("button");
//             <button type = "button"></button>
//             button.onclick = function() {
//             pScissors();
// };
//         }

//     }

//     if (p1 = "choice1") {
//         p1 = "rock"
         function pRock() {
             let pimage = new image (100, 200)
             pimage.src = "assets/images/rock-pic.jpg"
         }
         
//         }
//     else if (p1 = "choice2") {
//          p1 = "paper"
          function pPaper() {
             let pimage = new image (100, 200)
             pimage.src = "assets/images/paper-pic.jpg"
//         }
//         pPaper
//         }
//     else if (p1 ="choice3") {
//          p1 = "scissors"
          function pScissors() {
             let pimage = new image (100, 200)
             pimage.src = "assets/images/scissors-pic.jpg"
         }
//         pScissors
//     };

//     function computerMove(p2) {
//         let p2 = Math.floor(Math.random() * 3) + 1;   

//         if (p2 = "1") {
//             p2 = "rock"
//             function cRock() {
//                 let cimage = new image (100, 200)
//                 cimage.src = "assets/images/rock-pic.jpg"
//             }
//             cRock
//             }
//         else if (p2 = "2") {
//              p2 = "paper"
//              function cPaper() {
//                 let cimage = new image (100, 200)
//                 cimage.src = "assets/images/paper-pic.jpg"
//             }
//             cPaper
//             }
//         else if (p2 ="3") {
//             p2 = "scissors"
//             function cScissors() {
//                 let cimage = new image (100, 200)
//                 cimage.src = "assets/images/scissors-pic.jpg"
//             }
//             cScissors
//         };
        
//     }

        


//     function decideWinner(p1, p2) {
//         let result = null;
      
//         switch (p1.choice + p2.choice) {
//           case "rockscissors":
//           case "scissorspaper":
//           case "paperrock":
//             result = p1;
//             break;
//           case "scissorsrock":
//           case "paperscissors":
//           case "rockpaper":
//             result = p2;
//             break;
//           case "paperpaper":

//           case "scissorsscissors":
//           case "rockrock":
//             result = null;
//             break;
//         }
//         return result;

//         if (result = "p1") {
//             playerScore = ++playerScore
//         } else {
//             computerScore = ++computerScore
//         }
//       };

// }

// playGame();

// function clearBoard() {



}