var chessboard = '';
var size = 8;

// for (chessboard = ''; chessboard.length <= 64;) {
//     if (chessboard.length % 8 == 0) {
//         chessboard.concat('/n' + blackWhite);
//     } else {
//         chessboard.concat(blackWhite);
//     }
//     console.log(chessboard);
// }

// function board() {
//     while (chessboard.length <= 64) {
//         chessboard = chessboard + black;
//         if (chessboard.length % 8 == 0 && chessboard.startsWith('#')) {
//             chessboard.concat('/n' + white);
//         } else {
//             chessboard.concat(black);
//         }
//         console.log(chessboard);
//     }
// }

for (y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            chessboard += "#";
        else
            chessboard += " ";
    }
    chessboard += "\n";
}

console.log(chessboard);