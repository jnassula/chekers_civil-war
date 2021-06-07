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
      ]
    }
  }


  // buildBoard() {
  //   let board = [];
  //   for (let i = 0; i < this.props.lines; i++) {
  //     let line = [];
  //     for (let j = 0; j < this.props.columns; j++) {
  //       line.push(" ");
  //     }
  //     board.push(line);
  //   }
  //   return board;
  // }

  render() {
    return (
      <>
        <container>
          <section className="banner">
            <img src="/scale.jpeg" />
          </section>
        </container>
        <section className="board">
          <table>
            <tbody>
              {
                this.state.board.map((line, i) => (
                  <tr key={i}>
                    {
                      line.map((cell, j) => (
                        <td key={j}
                          onClick={() => this.parts(j)}>
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
      </>
    )
  }
}

export default Chekers;