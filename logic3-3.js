var n = 9
var s = ''

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (x == y) {
            s += `${x * 2 + 1} &nbsp`
        } else if (n - y - 1 == x) {
            s += `${y * 2} &nbsp`
        } else {
            s += '- &nbsp'
        }
    }
    s += '<br>'
}

document.write(s)