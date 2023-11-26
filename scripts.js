//BU Logic


function beepBoop(number) {
    const result = [];
    for (let num = 0; num <= number; num++) {
      let substitution = num.toString();
    
      if (num.toString().includes('3')) {
        substitution = "Won't you be my neighbor?";
      } else if (num.toString().includes('2')) {
        substitution = 'Boop!';
      } else if (num.toString().includes('1')) {
        substitution = 'Beep!';
      }

    result.push(substitution)

    }

    return result;

}