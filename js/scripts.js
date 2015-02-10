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
  return array;
};
