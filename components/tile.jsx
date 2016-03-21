var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('../minesweeper');

var Tile = React.createClass({
  handleClick: function (e) {
    var flagging = e.altKey;
    // debugger;
    this.props.updateGameCallback(this.props.tile, flagging);
  },

  render: function () {

    var tileStyle = "";
    var tileContent = "";

    if (this.props.tile.explored){
      tileStyle = "exp";
      tileContent = this.props.tile.adjacentBombCount() ? this.props.tile.adjacentBombCount() : "";
    } else if (this.props.tile.flagged) {
      tileStyle = "flag";
      tileContent ="🚩";
    } else if (this.props.tile.bombed) {
      tileStyle = "bomb";
      tileContent = "💣";
    }

    return (
      <li className={"tile " + tileStyle} onClick={this.handleClick}>{tileContent}</li>
    );
  }
});

module.exports = Tile;
