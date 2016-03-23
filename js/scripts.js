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

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add .num1").val());
    var number2 = parseInt($("#add .num2").val());
    var result = add(number1, number2);
    $("#add .output").text(result);
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
