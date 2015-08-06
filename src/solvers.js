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
  var realSolution = [];

  if(n === 1){
    return [[1]];
  }
  for(var m = 0; m < n; m++) {
    //create new board
    var board = new Board({'n': n});
    //start initial rook position
    board.togglePiece(0, m);
    //iterating through every row array
    for(var row = 1; row < n; row++) {
      //iterating through every column in that row
      for (var col = 0; col < n; col++) {
        //testing if it's the first run
        if((0, m) === (row, col)) {
          continue;
        }
        //toggling piece and performing check on the piece
        board.togglePiece(row, col);
        if(board.hasAnyRowConflicts(row) || board.hasAnyColConflicts(col)){
          //if conflicts are flagged, we toggle the piece back to zero
          board.togglePiece(row, col);
        } else {
          if(row === n && col === n) {
            realSolution.push(board);
            //curIteration = row 1's current piece
            //row 1 [curIteration + 1] = 1
            //row 1 [curIteration = 0];
            //
          }
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



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


