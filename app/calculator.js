exports.calculate = function(expression) {
  const numbers = expression.trim().split(' ');
  const stack = [];

  for(let i = numbers.length - 1 ; i >= 0; i--) {
    const token = numbers[i];
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      
      if(token === '+') {
           stack.push(num1 + num2);
      } else if (token === '-') {
        stack.push(num1 - num2);
      } else if (token === '*') {
        stack.push(num1 * num2);
      } else if(token === '/') {
        stack.push(num1 / num2);
      } else {
        throw new Error('Invalid operator');
      }
    }
  }

  const result = stack.pop();
  return result;

}

