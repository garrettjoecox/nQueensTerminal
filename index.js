require('colorslite');

var board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

var solutions = 0;
var n = board[0].length;

crawl(board, 0);
console.log('Solutions:', solutions);

function crawl(matrix, x){
  for (var i = 0; i < n; i++) {
    toggle(matrix, x, i);
    if (hasNoConflicts(matrix)) {
      logBoard(matrix, x, i, 'green');
      if (x < n-1) crawl(matrix, x+1);
      else {
        solutions++;
        logBoard(matrix, x, i, 'yellow');
      }
    } else {
      logBoard(matrix, x, i, 'red');
    }
    toggle(matrix, x, i);
  }
}

function toggle(matrix, x, y){
  matrix[x][y] = matrix[x][y] === 1 ? 0 : 1;
}

function logBoard(matrix, x, y, color) {
  var string = '';
  matrix.forEach(function(row, j) {
    if (j != 0) string+= '\n'
    row.forEach(function(column, i) {
      if (i === 0) string+= '| ';
      if ( x === j && y === i){
        string+= column.toString()[color] + ' | ';
      } else {
        string+= column + ' | ';
      }
    });
  });
  console.log( '\n' + string);
}

function hasNoConflicts(matrix) {
  return true;
}
