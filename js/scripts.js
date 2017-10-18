//var number1 = parseInt(prompt("enter a number"));
//var number2 = parseInt(prompt("enter another number"));

var add = function(number1, number2){
  return number1 + number2;
};

//var addResult = add(number1, number2);

var subtract = function(number1, number2) {
  return number1 - number2;
};

//var subResult = subtract(number1, number2);

var multiply = function(number1, number2) {
  return number1 * number2;
};

//var multResult = multiply(number1, number2);

var divide = function(number1, number2) {
  return number1 / number2;
};

//var divResult = divide(number1, number2);

//alert(add(number1, number2));
//alert(subtract(number1, number2));
//alert(multiply(number1, number2));
//alert(divide(number1, number2));

var bmi = function(height, weight) {
  return (weight / (height * height));
}

//var height = parseFloat(prompt("How tall are you?"));
//var weight = parseFloat(prompt("How much do you weigh?"));

//alert(bmi(height, weight));

var convertToF = function(temp) {
  return (temp * 1.8) + 32;
}
 var convertToC = function(temp) {
   return ((temp - 32) * 5) / 9;
 }

 //var tempF = parseFloat(prompt("What is the current temperature in Farenheit?"));
 //var tempC = parseFloat(prompt("What is the current temperature in Celsius?"));

 //alert(convertToF(tempC));
 //alert(convertToC(tempF));
 var convertToGallon = function(liter) {
   return liter * 0.264172;
 }

//var userInput = parseFloat(prompt("Enter a volume in liters"));

//alert(convertToGallon(userInput));

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#addOutput").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#subOutput").text(result);
  })
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = multiply(number1, number2);
    $("#multiplyOutput").text(result);
  })
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1, number2);
    $("#divisionOutput").text(result);
  })

});
