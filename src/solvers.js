/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
  var row = 0;
  var col = 0;
  var firstRun = false;
  var realSolution = [];

  if(n === 1){
    return [[1]];
  }

  solution.togglePiece(0, 0);
  //iterating through every row array
  for(row; row < n; row++) {
    col = 0;
    //iterating through every column in that row
    for (col; col < n; col++) {
      //testing if it's the first run
      if(!firstRun) {
        firstRun = true;
      } else {
        //toggling piece and performing check on the piece
        solution.togglePiece(row, col);
        if(solution.hasAnyRowConflicts(row) || solution.hasAnyColConflicts(col)){
          //if conflicts are flagged, we toggle the piece back to zero
          solution.togglePiece(row, col);
        }
      }
    }
  }
  //Iterating through the solution to get each row array from the object and pushing to our final array matrix
  for(var i = 0; i < n; i ++) {
    realSolution.push(solution.get(i));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return realSolution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution;

  var countSolutions = function(board, rowIndex){
    var result = 0, row;
    debugger;
    row = board.rows()[rowIndex];

    //go through columns
    for(var i = 0; i < n; i++){
      //adding piece to spot
      row[i] = 1;

      if(!board.hasAnyRooksConflicts()) {
        //check if there are more rows
        if(rowIndex+1 < n) {
          result += countSolutions(board, rowIndex + 1);
        } else {
          result += 1
        }
      }
      row[i] = 0;
    }

    return result;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution = countSolutions(new Board({n : n}), 0);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution;

  if(n === 0 || n === 1) {
    return 1;
  }

  var countSolutions = function(board, rowIndex){
    var result = 0, row;
    debugger;
    row = board.rows()[rowIndex];

    //go through columns
    for(var i = 0; i < n; i++){
      //adding piece to spot
      row[i] = 1;

      if(!board.hasAnyQueensConflicts()) {
        //check if there are more rows
        if(rowIndex+1 < n) {
          result += countSolutions(board, rowIndex + 1);
        } else {
          result += 1
        }
      }
      row[i] = 0;
    }

    return result;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution = countSolutions(new Board({n : n}), 0);
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


