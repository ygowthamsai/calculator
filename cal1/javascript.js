function calculate(operation) {
  var ip1 = parseFloat(document.getElementById("input1").value);
  console.log("input1 value", ip1);
  var ip2 = parseFloat(document.getElementById("input2").value);
  console.log("addition", ip1 + ip2);
  // var result = document.createElement()
  var result = document.getElementById("result");

  //   if (operation === "add") {
  //     result.innerText = ip1 + ip2;
  //   } else if (operation === "sub") {
  //     result.innerText = ip1 - ip2;
  //   } else if (operation === "mul") {
  //     result.innerText = ip1 * ip2;
  //   } else result.innerText = ip1 / ip2;

  switch (operation) {
    case "add": {
      result.innerText = ip1 + ip2;
      break;
    }
    case "sub": {
      result.innerText = ip1 - ip2;
      break;
    }
    case "mul": {
      result.innerText = ip1 * ip2;
      break;
    }
    case "div": {
      result.innerText = ip1 / ip2;
    }
  }
}
