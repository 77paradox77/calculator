$(document).ready(function() {
  //addition
  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };

  $("form.equation").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($(".num1").val());
    var number2 = parseInt($(".num2").val());
    if ($("select").val() === "add") {
      var result = add(number1, number2);
    } else if ($("select").val() === "subtract") {
      var result = subtract(number1, number2);
    } else if ($("select").val() === "multiply") {
      var result = multiply(number1, number2);
    } else if ($("select").val() === "divide") {
      var result = divide(number1, number2);
    }
    $(".output").text(result);
  });


/*
  function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      console.log(letters);
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
          console.log(i + " " + color);
      }
      return color;
  }

  $( document ).keypress(function() {
    $("html").css("background-color",getRandomColor());
  });
  */
});
