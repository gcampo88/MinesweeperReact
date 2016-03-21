var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/game');
// var Minesweeper = require('./minesweeper');




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game />, document.getElementById("root"));
});
