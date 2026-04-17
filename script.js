function runFizzBuzz() {
  let outputDiv = document.getElementById("output");
  let resultHTML = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) resultHTML += "FizzBuzz<br>";
    else if (i % 3 === 0) resultHTML += "Fizz<br>";
    else if (i % 5 === 0) resultHTML += "Buzz<br>";
    else resultHTML += i + "<br>";
  }

  outputDiv.innerHTML = resultHTML;
}
