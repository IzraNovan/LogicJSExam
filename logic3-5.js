var n = 9
var s = ''

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (x > y) {
            s += 'A &nbsp'
        } else if (x == y) {
            s += `${x * 2 + 1} &nbsp`
        } else {
            s += 'B &nbsp'
        }
    }
    s += '<br>'
}

document.write(s)