function show() {
  var inputone = parseInt(document.getElementById("valueone").value);
  var inputtwo = parseInt(document.getElementById("valuetwo").value);
  var inputthree = parseInt(document.getElementById("valuethree").value);
  if ((inputone + inputtwo > inputthree) && (inputtwo + inputthree > inputone) && inputone + inputthree > inputtwo) {
    if (inputone === inputtwo && inputtwo === inputthree) {
      alert("This is an Equilateral triangle");
    } else if (inputone === inputtwo || inputtwo === inputthree || inputone === inputthree) {
      alert("This is an isosceles triangle")
    } else {
      alert("This is a scalene triangle")
    }
  } else {
    alert("Not a triangle")
  }
};
