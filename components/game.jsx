var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('../minesweeper');
var Board = require('./board');

var Game = React.createClass({

  getInitialState: function () {
    return { board: new Minesweeper.Board(10, 10) };
  },

  updateGame: function (tile, flagging) {
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
      if (tile.bombed) {
        alert("You lose!")
      }
    }
    this.setState({ board: this.state.board });

  },

  render: function () {
    return (
      <Board board={this.state.board.grid} updateGameCallback={this.updateGame} />
    );
  }
});

module.exports = Game;
