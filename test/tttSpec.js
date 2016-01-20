var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line
require('mocha-generators').install();

describe("TTT tests", function(){
    var nightmare;

    beforeEach(function() {
      nightmare = Nightmare({
        // show:true,
      });
    });

    afterEach(function*() {
      yield nightmare.end();
    });

  describe("Starting the game", () =>{
    it("It should start with X", function*(){
      var start = yield nightmare
        .goto('http://localhost:8080')
        .evaluate(function () {
          return document.getElementsByClassName('playerTurn')[0].innerText;
        });
      expect(start).to.equal('It is X\'s turn');
    });
  });

  describe("Changing the player", () => {
    it("It should toggle between X and O", function*(){
      var move = yield nightmare
        .goto('http://localhost:8080')
        .click('#cell0')
        .evaluate(function () {
          return document.getElementById('cell0').innerHTML;
        });
      expect(move).to.equal('X');
    });

    it("Should not overwrite an existing tile", function*(){
      var cell = yield nightmare
        .goto('http://localhost:8080')
        .click('#cell0')
        .click('#cell0')
        .click('#cell0')
        .evaluate(function () {
          return document.getElementById("cell0").innerText;
        });
      expect(cell).to.equal('X');
    });
  });

  describe("Checking for a winner", () =>{
    it("checks for a winner", function*(){
      var winner = yield nightmare
        .goto('http://localhost:8080')
        .click('#cell0')
        .click('#cell3')
        .click('#cell1')
        .click('#cell4')
        .click('#cell2')
        .evaluate(function(){
          return document.getElementsByClassName("playerTurn")[0].innerText;
        });
        expect(winner).to.equal("Game over, X wins!");
    });
    it("does not change the winner", function*(){
      var winner = yield nightmare
        .goto('http://localhost:8080')
        .click('#cell0')
        .click('#cell3')
        .click('#cell1')
        .click('#cell4')
        .click('#cell2')
        .click('#cell5')
        .click('#cell7')
        .click('#cell8')
        .click('#cell9')
        .evaluate(function(){
          return document.getElementsByClassName("playerTurn")[0].innerText;
        });
        expect(winner).to.equal("Game over, X wins!");
    });
  });

  describe('Ending the game', () => {
    it('should reset the board successfully', function*() {
      var reset = yield nightmare
        .goto('http://localhost:8080')
        .click('#reset')
        .evaluate(function () {
          return document.getElementsByClassName('playerTurn')[0].innerText;
        });
      expect(reset).to.equal('It is X\'s turn');
    });
  });
});