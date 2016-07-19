$(document).on('ready', function() {
  console.log('initiated!');

  var gameGrid = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
  };

  var loadGrid = function(gridObj) {
    console.log('called');

    for (var row in gameGrid) {
      console.log(row + ' is being computed');
      //make rows for each key in gridObj and tag them with their relevant key
      $('.game-grid').append('<tr class="row-column-' + row + '"></tr>');

      //decide width of board and push values for each tile to grid Obj
      var width = 10;
      for (var i = 0; i < width; i++) {
        gameGrid[row].push(0);
      }

      //now that we have arrays representing values for each row's columns...
      for (var j = 0; j < gameGrid[row].length; j++) {
        $('.row-column-' + row).append('<td class="' + row + j + '"></td>');
      }
    }

  };

  var addCar = function() {
    var result = 0;
    var possible = Math.floor((Math.random() * 10) + 1);
    if (possible > 5) {
      return possible;
    }
    return result;
  };


  var updateArrays = function(gridObj) {
    for (var row in gridObj) {
      var result = addCar();
      gridObj[row].shift();
      gridObj[row].push(result);
    }
  };

  var updateGrid = function(gridObj) {
    console.log('updateGrid called');
    for (var row in gridObj) {
      for (var i = 0; i < gridObj[row].length; i++) {
        var curEle = $('.' + row + i);
        var curVal = gridObj[row][i];
        curEle.text(gridObj[row][i]);
      }
    }
  };

  loadGrid(gameGrid);
  setInterval(function() {
    updateArrays(gameGrid);
    updateGrid(gameGrid);
  }, 1000);

});
