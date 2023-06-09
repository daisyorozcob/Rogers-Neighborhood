function generateList() {
    var numberInput = document.getElementById("numberInput").value;
    var resultList = [];
  
    for (var i = 0; i <= numberInput; i++) {
      if (containsDigit(i, 3)) {
        resultList.push("Won't you be my neighbor?");
      } else if (containsDigit(i, 2)) {
        resultList.push("Boop!");
      } else if (containsDigit(i, 1)) {
        resultList.push("Beep!");
      } else {
        resultList.push(i);
      }
    }

    document.getElementById("result").innerHTML = resultList.join(",");
}

function containsDigit(number, digit) {
    return number.toString().includes(digit.toString());
}