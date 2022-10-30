// rectangular
var rectangular = "";

for(var a = 0; a < 4; a++){
    for(var b = 0; b < 8; b++){
        rectangular += "#";
    }
    rectangular += "\n";
}
console.log(rectangular);

console.log("---------------------------");

// Ladder
var ladder = "";

for(var i = 0; i < 8; i++){
    for(var j = 0; j < i; j++){
        ladder += "#";
    }
    ladder += "\n";
}
console.log(ladder);

console.log("---------------------------");

// Chessboard
var chessboard = "";

for(var x = 0; x < 8; x++){
    if (x % 2 == 1){
    for(var y = 0; y < 8; y++){
        if(y % 2 == 0){
            chessboard += "#";
        } else {
            chessboard += " ";
        }
    }
    chessboard += "\n";
} else {
    for(var y = 0; y < 8; y++){
        if(y % 2 == 1){
            chessboard += "#";
        } else {
            chessboard += " ";
        }
    }
    chessboard += "\n"; 
}
}
console.log(chessboard);