module.exports = function solveEquation(equation) {
  var arr=equation.split(' '), 
  	a = +arr[0], 
  	b = +arr[4], 
  	c = +arr[8],
  	result = [];

  if (arr[3] == '-') b = -b;
  if (arr[7] == '-') c = -c;

  var Discr = Math.sqrt(b * b - 4 * a * c);

  var x1=Math.round((-b - Discr) / (2 * a)), 
  	x2=Math.round((-b + Discr) / (2 * a));

  result.push(Math.round((-b - Discr) / (2 * a)));
  result.push(Math.round((-b + Discr) / (2 * a)));

  function compare(a, b){
    return a - b;
  }

  return result.sort(compare);
}
