var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('../minesweeper');
var Tile = require('./tile');

var Board = React.createClass({
  render: function () {
  var self = this;
  // debugger;

    var boardComponents = this.props.board.map(function (row, index) {
      row = row.map(function (square, index2) {
         return (<Tile tile={square} key={index2} updateGameCallback={self.props.updateGameCallback} />);
        });
    return <div key={index}>{row}</div>;
    });


    return (
      <div>
        {boardComponents}
      </div>
    );
  }
});

module.exports = Board;
