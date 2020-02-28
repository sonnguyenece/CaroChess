let display = "<table border='1px' cellpadding='2px' " +
    "style='text-align: center;border-collapse: collapse;table-layout: fixed'><tr>";
let i, j;
let tempOX = 0;
let col = prompt("Nhap vao so cot : ");
let row = prompt("Nhap vao so hang : ");
let table = Create2DArray(row);
for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
        table[i][j] = i + "." + j;
    }
}

for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
        display += "<td id=" + i + "." + j + " onclick='drawXO(this.id)'>" + ' ' + "</td>";
    }
    display += "</tr>";
}
document.getElementById('ticTacToe').innerHTML = display;

function Create2DArray(rows) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}

function drawXO(id) {
    let temp = document.getElementById(id).id;
    temp = temp.split(".");
    i = temp[0];
    j = temp[1];
    if (tempOX === 0) {
        document.getElementById(id).innerText = 'X';
        document.getElementById(id).style.color = "blue";
        table[i][j] = 'X';
        console.log(table)
    } else {
        document.getElementById(id).innerText = 'O';
        document.getElementById(id).style.color = "red";
        table[i][j] = 'O';
    }
    checkWin();
    tempOX++;
    if (tempOX > 1) tempOX = 0;
}

function checkWin() {
    if (checkRow() || checkCol() || checkRightObl() || checkLeftObl()) alert("Game Over");
}

function checkRow() {
    let result = false;
    let count = 0;
    let k = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col - 4; j++) {
            for (let k = 1; k <= 4; k++) {
                if (table[i][j] === table[i][j + k]) {
                    count++;
                }
            }
            if (count === 4) {
                result = true;
                return result;
            }
            if (count < 4) count = 0;
        }
    }
}


function checkCol() {
    let result = false;
    let count = 0;
    let k = 1;
    for (let j = 0; j < col; j++) {
        for (let i = 0; i < row - 4; i++) {
            for (let k = 1; k <= 4; k++) {
                if (table[i][j] === table[i + k][j]) {
                    count++;
                }
            }
            if (count === 4) {
                result = true;
                return result;
            }
            if (count < 4) count = 0;
        }
    }
}

function checkRightObl() {
    let result = false;
    let count = 0;
    let k = 1;
    for (let i = 0; i < row - 4; i++) {
        for (let j = 0; j < col - 4; j++) {
            for (let k = 1; k <= 4; k++) {
                if (table[i][j] === table[i + k][j + k]) {
                    count++;
                }
            }
            if (count === 4) {
                result = true;
                return result;
            }
            if (count < 4) count = 0;
        }
    }
}

function checkLeftObl() {
    let result = false;
    let count = 0;
    let k = 1;
    for (let i = 0; i < row - 4; i++) {
        for (let j = 4; j < col; j++) {
            for (let k = 1; k <= 4; k++) {
                if (table[i][j] === table[i + k][j - k]) {
                    count++;
                }
            }
            if (count === 4) {
                result = true;
                return result;
            }
            if (count < 4) count = 0;
        }
    }
}