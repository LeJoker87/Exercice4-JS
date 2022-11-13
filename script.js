switch(operateur) {
    case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

    case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

    case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

    case '/':
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

    default:
    console.log('Operateur invalide');
    break;
  }
  alert(result);