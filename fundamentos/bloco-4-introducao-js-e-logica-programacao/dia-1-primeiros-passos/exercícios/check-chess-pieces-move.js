let piece = 'paw';

piece = piece.toLowerCase();

if (piece === 'pawn') {
  console.log(
    'vertically forward one square, with the option to move two squares if they have not yet moved. '
  );
} else if (piece === 'rooks') {
  console.log(
    'move horizontally or vertically any number of squares. They are unable to jump over pieces.'
  );
} else if (piece === 'bishop') {
  console.log('move diagonally any number of squares.');
} else if (piece === 'knight') {
  console.log(
    'move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.'
  );
} else if (piece === 'king') {
  console.log(
    'move one square in any direction, so long as that square is not attacked by an enemy piece.'
  );
} else if (piece === 'queen') {
  console.log(
    'move diagonally, horizontally, or vertically any number of squares'
  );
} else {
  console.log('Invalid chess piece');
}
