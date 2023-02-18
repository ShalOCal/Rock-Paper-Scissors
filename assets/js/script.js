 

function playGame() {



    function whichClick() {

    }

    function computerMove() {
        
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