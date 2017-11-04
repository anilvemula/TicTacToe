arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
turn = 0
count = 0
color = { 0: "border: 5px solid blue;", 1: "border: 5px solid red;" }
di = { 0: 'X', 1: 'O' }

function whowon() {
    var ret = 0;
    for (var i = 0; i < 3; ++i)
        if (arr[i] == arr[i + 3] && arr[i + 3] == arr[i + 6] && (arr[i] == 'X' || arr[i] == 'O')) {
            ret = arr[i]
        }
    for (var a = 0; a < 3; ++a) {
        var i = 3 * a
        if (arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2] && (arr[i] == 'X' || arr[i] == 'O')) {
            ret = arr[i]
        }
    }
    if (arr[0] == arr[4] && arr[4] == arr[8] && (arr[0] == 'X' || arr[0] == 'O')) {
        ret = arr[0]
    }
    if (arr[6] == arr[4] && arr[4] == arr[2] && (arr[4] == 'X' || arr[4] == 'O')) {
        ret = arr[4]
    }
    return ret
}

function start() {
    for (var i = 1; i < 10; ++i)
        document.getElementById("1" + i).addEventListener("click", onclick)
    newgame()
}

function newgame() {
    count = 0
    turn = 0
    for (var i = 1; i < 10; ++i) {
        document.getElementById("" + i).innerHTML = ''
        arr[i - 1] = 0
    }
    document.getElementById("turn").innerHTML = "1"
    document.getElementsByTagName("table")[0].setAttribute("style", color[turn])
}

function onclick() {
    index = this.innerHTML.trim()[10]
    if (arr[parseInt(index) - 1] == 0) {
        count += 1
        document.getElementById("" + index).innerHTML = arr[parseInt(index) - 1] = di[turn]
        turn ^= 1
        document.getElementsByTagName("table")[0].setAttribute("style", color[turn])
        document.getElementById("turn").innerHTML = "" + (turn + 1)
        var w = whowon()
        if (w != 0) {
            alert("player " + ((turn ^ 1) + 1) + " won the game")
            newgame()

        }
        if (count == 9) {
            alert("draw match")
            newgame()
        }
    }
}
start()