/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x,y){
  x = Math.abs(x);
  y = Math.abs(y);

  if (y > x) {
    var temp = x;
    x = y;
    y = temp;
  }

  while (true) {
    x %= y;
    if (x === 0) {
      return y;
    }
    y %= x;
    if (y === 0) {
      return x;
    }
  }
}