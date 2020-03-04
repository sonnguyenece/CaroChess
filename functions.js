let display = "<table border='1px' cellpadding='2px' " +
    "style='text-align: center;border-collapse: collapse;table-layout: fixed'><tr>";
let i, j;
let tempOX = 0;
let col = prompt("Nhap vao so cot : ");
let row = prompt("Nhap vao so hang : ");
let table = Create2DArray(row);

function init() {
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
}

function Create2DArray(rows) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
    }
    arr.push("");
    return arr;
}

function drawXO(id) {
    if (checkWin()) return;
    let temp = document.getElementById(id).id;
    temp = temp.split(".");
    i = temp[0];
    j = temp[1];
    if (table[i][j] === 'X' || table[i][j] === 'O') {
        alert('Cell is not empty');
        return;
    }
    if (tempOX === 0) {
        document.getElementById(id).innerText = 'X';
        document.getElementById(id).style.color = "blue";
        table[i][j] = 'X';
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
    if (checkRow() || checkCol() || checkRightObl() || checkLeftObl())
    {
        setTimeout(function () {
            alert("Game Over");
        }, 100);
        return true;
    }
}

function checkRow() {
    let count = 0;
    let k = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col - 4; j++) {
            while (table[i][j] === table[i][j + k]) {
                k++;
                count++;
            }
            if (count >= 4) {
                for (k = 0; k <= count; k++) {
                    document.getElementById(i + '.' + (j + k)).style.color = "yellow";
                }
                return true;
            }
            if (count < 4) {
                count = 0;
                k = 1;
            }
        }
    }
}


function checkCol() {
    let count = 0;
    let k = 1;
    for (let j = 0; j < col; j++) {
        for (let i = 0; i < row-4; i++) {
            while (table[i][j] === table[i+k][j]) {
                //khi o ria border +1 se lam gia tri cua table[i] vuot ra ngoai dan den bug
                k++;
                count++;
            }
            if (count >= 4) {
                for (k = 0; k <= count; k++) {
                    document.getElementById((i+k) + '.' +j).style.color = "yellow";
                }
                return true;
            }
            if (count < 4) {
                count = 0;
                k = 1;
            }
        }
    }
}

function checkRightObl() {
    let count = 0;
    let k = 1;
    for (let i = 0; i < row - 4; i++) {
        for (let j = 0; j < col - 4; j++) {
            while (table[i][j] === table[i+k][j+k]) {
                k++;
                count++;
            }
            if (count >= 4) {
                for (k = 0; k <= count; k++) {
                    document.getElementById((i+k) + '.' +(j+k)).style.color = "yellow";
                }
                return true;
            }
            if (count < 4) {
                count = 0;
                k = 1;
            }
        }
    }
}

function checkLeftObl() {
    let count = 0;
    let k = 1;
    for (let i = 0; i < row - 4; i++) {
        for (let j = 4; j < col; j++) {
            while (table[i][j] === table[i+k][j-k]) {
                k++;
                count++;
            }
            if (count >= 4) {
                for (k = 0; k <= count; k++) {
                    document.getElementById((i+k) + '.' +(j-k)).style.color = "yellow";
                }
                return true;
            }
            if (count < 4) {
                count = 0;
                k = 1;
            }
        }
    }
}

function restart() {
    display = "<table border='1px' cellpadding='2px' " +
        "style='text-align: center;border-collapse: collapse;table-layout: fixed'><tr>";
    tempOX = 0;
    table = Create2DArray(row);
    init();
}
