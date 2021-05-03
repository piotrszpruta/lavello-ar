// Alert z numerem indeksu
//window.onload = alert('Nr indeksu: 462035');
function unloadAlert() {
  alert('Nr indeksu: 462035 (zamknięcie)');
}

// Kalkulator
window.onload = function () {
  $('button').click(function () {
    selectedButton = $(this).attr('value');
    console.log(selectedButton);
    click();
  });
}

wykonanoDzialanie = false;

function click() {
  if (selectedButton === 'C') {
    document.getElementById('inputField').innerHTML = '0';
  }
  else if (selectedButton === '/' || selectedButton === '*' || selectedButton === '-' || selectedButton === '.' || selectedButton === '+') {
    document.getElementById('inputField').innerHTML += selectedButton;
    wykonanoDzialanie = false;
  }
  else if (selectedButton === '=') {
    var dzialanie = document.getElementById('inputField').innerHTML;
    var result;

    eval(dzialanie);
    result = eval(dzialanie);

    if (Number.isInteger(result))
      document.getElementById('inputField').innerHTML = result;
    else
      document.getElementById('inputField').innerHTML = result.toFixed(2);

    wykonanoDzialanie = true;
  }
  else {
    wyczysc();
    document.getElementById('inputField').innerHTML += selectedButton;
  }
}

function wyczysc() {
  if (document.getElementById('inputField').innerHTML === '0' || wykonanoDzialanie === true || document.getElementById('inputField').innerHTML === 'Error')
    document.getElementById('inputField').innerHTML = '';

  wykonanoDzialanie = false;
}
