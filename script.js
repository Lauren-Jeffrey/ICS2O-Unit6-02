document.getElementById('checknumber').addEventListener('click', myfunction)
function myfunction () {
  let number = document.getElementById('usernumber').value

  if (number > 0) {
    alert('Your number is positive')
    }
  else if (number < 0) {
    alert('Your number is negative')
    }
  }
