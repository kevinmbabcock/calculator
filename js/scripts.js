var operation = function(type, number1, number2) {
  if (type === "add") {
    var add = function(number1, number2){
      return number1 + number2;
    };
  } else if (type === "subtract") {

    var subtract = function(number1, number2) {
      return number1 - number2;
    };
  } else if (type === "multiply") {

    var multiply = function(number1, number2) {
      return number1 * number2;
    };
  } else if (type === "divide") {

    var divide = function(number1, number2) {
      return number1 / number2;
    };
  }
};

$(document).ready(function() {
  $(".calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = operation(operator, number1, number2);
    $("#output").text(result);
  });
  // $("form#subtract").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#sub1").val());
  //   var number2 = parseInt($("#sub2").val());
  //   var result = subtract(number1, number2);
  //   $("#subOutput").text(result);
  // })
  // $("form#multiply").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#mult1").val());
  //   var number2 = parseInt($("#mult2").val());
  //   var result = multiply(number1, number2);
  //   $("#multiplyOutput").text(result);
  // })
  // $("form#divide").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#div1").val());
  //   var number2 = parseInt($("#div2").val());
  //   var result = divide(number1, number2);
  //   $("#divisionOutput").text(result);
  // })

});
