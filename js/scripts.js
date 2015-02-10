var primeNumbers = function(input) {
  var array = [];
  for(var i = 2; i <= input; i++) {
    array.push(i);
  };

  array.forEach(function(number) {
      for(var i = number + number; i <= input; i = i + number) {
          var index = array.indexOf(i)
          if (index !== -1) {
            array.splice(index, 1);
          };
      };
    });
  return array.join(", ");
};

$(document).ready(function() {

  $("form#number_input").submit(function(event) {
    var number = parseInt($("input#number").val());
    var primes = primeNumbers(number);

  $(".result").text(primes);
  $("#results").show();
  event.preventDefault();

  });
});
