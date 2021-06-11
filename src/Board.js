import React from 'react';
import './App.css'


// function checkPossible(y, x, player, board) {
//   let moves = [];
//   if (board[y - 1][x + 1] === " ") {
//     moves.push(board[y + 1][x - 1]);
//   }
//   if (board[y + 1][x + 1] === " ") {
//     moves.push(board[y + 1][x - 1]);
//   }
//   return moves;
// }



class Chekers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        [" ","c"," ","c"," ","c"," ","c"],
        ["c"," ","c"," ","c"," ","c"," "],
        [" ","c"," ","c"," ","c"," ","c"],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        ["i"," ","i"," ","i"," ","i"," "],
        [" ","i"," ","i"," ","i"," ","i"],
        ["i"," ","i"," ","i"," ","i"," "]
      ],
      player: "i",
      possibleMoves: [[], []],
    }
  }

  selectPart(line, column, player) {
    //Registrar linha e coluna onde a peça se encontra.
  }

  possibleMoves(line, column, player) {
    //Guardar as jogadas possiveis da peça registrada.
  }

  nextPosition() {
    //Escolher qual a posição para onde a peça registrada vai!
  }

  move() {
    //Mover a peça para a posição final.
  }


  render() {
    return (
      <>
        <div className="container">
          <section className="banner" style={{backgroundImage:"url(/scale.jpeg)"}}> 
          </section>
          <section className="board">
            <h1>CHECKERS</h1>
            <table>
              <tbody>
                {
                  this.state.board.map((line, i) => (
                    <tr key={i}>
                      {
                        line.map((cell, j) => (
                          <td key={j}>
                              {
                                this.state.board[i][j] === 'c' ? <img src='/icon_captain.png' alt='captain_america' /> 
                                  : this.state.board[i][j] === 'i' ? <img src='/icon_ironman.png' alt='iron_man' /> : ' '
                              }
                          </td>
                        ))
                      }
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </section>
        </div>
      </>
    )
  }
}

export default Chekers;