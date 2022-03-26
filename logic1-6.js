var n = 9
var s = ''

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (x == 0 || x == 4 || x == n - 1) {
            s += '* &nbsp'
        } else if (y == 0 || y == 4 || y == n - 1) {
            s += '* &nbsp'
        } else {
            s += '- &nbsp'
        }
    }
    s += '<br>'
}
document.write(s)