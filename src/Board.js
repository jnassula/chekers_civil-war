import React from 'react';
import './App.css'

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
      rivals: "c",
      positionX: 0,
      positionY: 0,
      killPartX: 0,
      killPartY: 0,
      kill: false,
    }

    this.checkPossible = this.checkPossible.bind(this);
  }

  selectPart(x, y){
    if (this.state.player === this.state.board[x][y]){
      this.setState({
        positionX: x,
        positionY: y
      })

      if (this.state.player === "c"){
        this.checkPossible(x, y, -1)
        console.log("selectPart")
      }

      else if (this.state.player === "x"){
        this.checkPossible(x, y, -1)
        console.log("selectPart")
      }
    }
  }

  checkPossible(x, y, side) {
    this.setState(state => {
      state.possibleMoves = [[], []]
    })

    if (this.state.board[x + side][y - 1] === ""){
      this.setState(state => {
        state.possibleMoves[0] = [x + side, y - 1]
      })
    }

    if (this.state.board[x + side][y + 1] === ""){
      this.setState(state => {
        state.possibleMoves[1] = [x + side, y + 1]
      })
    }

    if (this.state.board[x + side][y - 1] === this.state.rivals && this.state.board[x + side * 2][y + 2] === ""){
      this.setState(state =>{
        state.possibleMoves[0] = [x + side * 2, y - 2]
        state.killPartX = [x + side]
        state.killPartY = [y + 1]
        state.kill = true
      })
    }

    if (this.state.board[x + side][y + 1] === this.state.rivals && this.state.board[x + side * 2][y + 2] === ""){
      this.setState(state => {
        state.possibleMoves[1] = [x + side * 2, y + 2]
        state.killPartX = [x + side]
        state.killPartY = [y + 1]
        state.kill = true
      })
    }
  }

  moviment(x, y){
    if ((x === this.state.possibleMoves[0][0] && y === this.state.possibleMoves[0][1]) || (x === this.state.possibleMoves[1][0] && y === this.state.possibleMoves[1][1])){
      let itens = [...this.state.board];
      let item = {...this.state.board[x][y] };

      item = `${this.state.player}`;
      let item2 = "";
      if (this.state.kill){
        itens[this.state.killPartX][this.state.killPartY] = "";
        this.setState(state => {
          state.killed = false
        })
      }

      itens[x][y] = item;
      itens[this.state.positionX][this.state.positionY] = item2;

      this.setState({ itens });

      if (this.state.killed){
        this.state.player === "i" ? this.setState({ player: "c"}) : this.setState({ player: "i"})
      }
      
      this.setState({ 
        possibleMoves: [[], []]
      })
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="banner" style={{backgroundImage:"url(/scale.jpeg)"}}> 
          </section>
          <section className="board">
            <table>
              <tbody>
                {
                  this.state.board.map((line, i) => (
                    <tr key={i}>
                      {
                        line.map((cell, j) => (
                          <td key={j}
                            onClick={() => this.selectPart(i, j)}>
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