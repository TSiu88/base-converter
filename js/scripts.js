function convert(base, eval){
  var isNegative = false;
  if (eval <0){
    isNegative = true;
    eval = eval * -1;
  }

  var divide = Math.floor(eval / base);
  var remainder = eval % base;
  if (base > 10 && remainder >10){
    remainder = letterConvert(remainder);
  }
  var resultString = remainder.toString();

  while(divide >1){
    var newDivide = Math.floor(divide / base);
    remainder = divide % base;

    if (base > 10 && remainder >10){
      remainder = letterConvert(remainder);
    }
    resultString = remainder.toString() + resultString.toString();
    divide = newDivide;
  }
  if (divide === 1){
    resultString = divide.toString() + resultString.toString();
  }
  if(isNegative){
    resultString = "-" + resultString;
  }
  return resultString;
}

function letterConvert(number){
  var letterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var index = number - 10;
  return letterArray[index];
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var baseCountNumber = $("#baseNumber").val();
    var evaluateNumber = $("#evalNumber").val();

    if (baseCountNumber > 62){
      alert("Base is too big!");
    }else{
      var result = convert(baseCountNumber, evaluateNumber);

      $(".output").show();
      $("#newNum").text(result);
    }


  })
})
