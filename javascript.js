function calculate() {
  var ip1 = parseFloat(document.getElementById("input1").value);
  console.log("input1 value", ip1);
  var ip2 = parseFloat(document.getElementById("input2").value);
  console.log("addition", ip1 + ip2);
  // var result = document.createElement()
  var result = document.getElementById("result");
  result.innerText = ip1 + ip2;
}
