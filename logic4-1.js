var n = 9;
var s = "";

// x < 5 && x + y > 3 && y - x < 5
// x + 1 >= 5 && y + x > 7 && x - y >= 0

for (var x = 0; x < n; x++) {
  for (var y = 0; y < n; y++) {
    if (
      (x + 1 >= 5 && y + x > 7 && x - y >= 0) ||
      (x < 5 && x + y > 3 && y - x < 5)
    ) {
      s += "* &nbsp";
    } else {
      s += "- &nbsp";
    }
  }
  s += "<br>";
}
document.write(s);
