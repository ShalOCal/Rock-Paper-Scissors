document.addEventListener("DOMContentLoaded"), function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                playGame();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    

    function whichClick(p1) {
        document.getElementById("rock").textContent = choice1
        document.getElementById("paper").textContent = choice2
        document.getElementById("scissors").textContent = choice3

    }

    if (p1 = "choice1") {
        p1 = "rock"
        function pRock() {
            let pimage = new image (100, 200)
            pimage.src = "assets/images/rock-pic.jpg"
        }
        pRock
        }
    else if (p1 = "choice2") {
         p1 = "paper"
         function pPaper() {
            let pimage = new image (100, 200)
            pimage.src = "assets/images/paper-pic.jpg"
        }
        pPaper
        }
    else if (p1 ="choice3") {
         p1 = "scissors"
         function pScissors() {
            let pimage = new image (100, 200)
            pimage.src = "assets/images/scissors-pic.jpg"
        }
        pScissors
    };

    function computerMove(p2) {
        let p2 = Math.floor(Math.random() * 3) + 1;   

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
        
    }

        
    }

    function decideWinner(p1, p2) {
        let result = null;
      
        switch (p1.choice + p2.choice) {
          case "rockscissors":
          case "scissorspaper":
          case "paperrock":
            result = p1;
            break;
          case "scissorsrock":
          case "paperscissors":
          case "rockpaper":
            result = p2;
            break;
          case "paperpaper":
          case "scissorsscissors":
          case "rockrock":
            result = null;
            break;
        }
        return result;
      };

}

function clearBoard() {

}