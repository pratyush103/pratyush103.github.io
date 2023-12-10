// Function to format card number
function formatCardNumber(value) {
    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  }
  
  // Function to validate form
  function validate() {
    var nameInput = document.getElementById('Cardholder-name');
    var numberInput = document.getElementById('Cardholder-number');
    var expMMInput = document.getElementById('CardExpMM');
    var expYYInput = document.getElementById('CardExpYY');
    var cvcInput = document.getElementById('Cardholder-cvc');

    var nameErr = document.getElementById('CardNameErr');
    var numberErr = document.getElementById('CardNumberErr');
    var expErr = document.getElementById('CardExpErr');
    var cvcErr = document.getElementById('CardCvcErr');

    // Remove error class from all inputs
    [nameInput, numberInput, expMMInput, expYYInput, cvcInput].forEach(input => input.classList.remove('error'));

    if (!nameInput.value) {
        nameErr.textContent = "Name cannot be empty";
        nameInput.classList.add('error');
        return false;
    } else {
        nameErr.textContent = "";
    }

    if (!numberInput.value) {
        numberErr.textContent = "Number cannot be empty";
        numberInput.classList.add('error');
        return false;
    } else if (numberInput.value.replace(/\s/g, '').length !== 16) {
        numberErr.textContent = "Card number must be 16 digits!";
        numberInput.classList.add('error');
        return false;
    } else {
        numberErr.textContent = "";
    }

    if (!expMMInput.value || !expYYInput.value) {
        expErr.textContent = "Expiration date cannot be empty";
        expMMInput.classList.add('error');
        expYYInput.classList.add('error');
        return false;
    } else if (expMMInput.value < 1 || expMMInput.value > 12 || expYYInput.value < new Date().getFullYear().toString().substr(-2)) {
        expErr.textContent = "Invalid expiry date!";
        expMMInput.classList.add('error');
        expYYInput.classList.add('error');
        return false;
    } else {
        expErr.textContent = "";
    }

    if (!cvcInput.value) {
        cvcErr.textContent = "CVC cannot be empty";
        cvcInput.classList.add('error');
        return false;
    } else if (cvcInput.value.length !== 3) {
        cvcErr.textContent = "CVC must be 3 digits!";
        cvcInput.classList.add('error');
        return false;
    } else {
        cvcErr.textContent = "";
    }
    document.getElementsByClassName('form')[0].classList.add('hidden');
    document.getElementsByClassName('success')[0].classList.remove('hidden');
    return true;
}

  
  // Function to handle keypress event
  function handleKeypress(id, targetId, formatter) {
    var input = document.getElementById(id);
    var target = document.getElementById(targetId);
  
    input.addEventListener('keyup', function() {
      target.textContent = formatter ? formatter(input.value) : input.value;
    });
  }
  
  // Attach event listeners
  handleKeypress('Cardholder-name', 'cardholderName');
  handleKeypress('Cardholder-number', 'cardNumber', formatCardNumber);
  handleKeypress('CardExpMM', 'cardExp-mm');
  handleKeypress('CardExpYY', 'cardExp-yy');
  handleKeypress('Cardholder-cvc', 'cardCVC');